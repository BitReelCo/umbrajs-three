import * as THREE from './ThreeWrapper'
import {
  initUmbra,
  deinitUmbra,
  Math as UmbraMath,
  Assets,
  UmbraInstance,
  PlatformFeatures,
  TextureSupportFlags,
  TextureType,
  ColorSpace,
  Runtime,
  View,
  Renderable,
  VertexBuffer,
  JobHandlers,
  LibraryConfig,
} from '@umbra3d/umbrajs'
import { ThreeFormats } from './ThreeFormats'
import { SharedFrameState } from './SharedFrameState'
import { UmbraScene, SceneFactory, MeshDescriptor } from './Scene'
import { WebGLRenderer } from 'three'
import { HeapBufferView } from '@umbra3d/umbrajs/dist/Heap'
import { TextureFormat, UserPointer } from '@umbra3d/umbrajs/dist/NativeTypes'

export type UmbraCamera = THREE.Camera & {
  umbraStreamingPosition?: THREE.Vector3
  umbraQuality?: number
}

function makeBoundingSphere(aabb: UmbraMath.BoundingBox) {
  const min = aabb[0]
  const max = aabb[1]
  const size = new THREE.Vector3(max[0] - min[0], max[1] - min[1], max[2] - min[2])
  const pos = new THREE.Vector3(min[0] + size.x * 0.5, min[1] + size.y * 0.5, min[2] + size.z * 0.5)
  return new THREE.Sphere(pos, size.length())
}

class UmbrajsThreeInternal implements SceneFactory {
  // Upper VRAM memory use limit in bytes
  memoryLimit = 500 * 1024 * 1024
  // Upper total download size limit in bytes. Turned off by default.
  downloadLimit = 0
  // This gets lowered automatically if memory limit is hit
  qualityFactor = 1.0

  onStreamingUpdate: (progress: number) => void
  onStreamingComplete: () => void

  // An instance of the umbrajs library for debugging
  umbrajs: UmbraInstance

  private runtime: Runtime
  private features: PlatformFeatures
  private renderer: WebGLRenderer
  private updateTask: number = undefined

  private assetSizes = new Map<any, number>()
  private textureMemoryUsed = 0
  private meshMemoryUsed = 0
  private lastQualityLowerFrame = -1

  private get memoryUsed() {
    return this.textureMemoryUsed + this.meshMemoryUsed
  }

  private umbraScenes = new Set<UmbraScene>()

  private oldState = {
    progress: 0,
    downloadLimitReached: false,
  }

  private sharedState: SharedFrameState = {
    cameraToView: new Map<THREE.Camera, View>(),
    viewRenderables: new Map<View, Renderable[]>(),
    viewLastUseFrame: new Map<View, number>(),
  }

  // Temporary values we don't want to reallocate every frame
  private tempVector = new THREE.Vector3()
  private dirVector = new THREE.Vector3()
  private matrixWorldInverse = new THREE.Matrix4()
  private projScreenMatrix = new THREE.Matrix4()
  private cameraWorldPosition = new THREE.Vector3()

  // This class should be instantiated via initUmbra()
  constructor(umbrajs: UmbraInstance, renderer: WebGLRenderer) {
    let context: WebGLRenderingContext
    // three.js r106 has no 'getContext'
    if ('getContext' in renderer) {
      context = renderer.getContext()
    } else {
      context = (renderer as any).context
    }

    // Query GL Context for supported extenions and fill platform features with that info
    const features = umbrajs.getPlatformFeatures(context)

    // Three.js does not support BC5 compressed formats so we manually disable them.
    features.textureSupportMask &= ~TextureSupportFlags.BC5

    this.umbrajs = umbrajs
    this.runtime = umbrajs.createRuntime({ features })
    this.runtime.setHandlers(this.handlers)
    this.renderer = renderer
    this.features = features

    this.startEventUpdate(1000 / 60)
  }

  startEventUpdate(interval: number) {
    this.stopEventUpdate()
    this.updateTask = window.setInterval(() => {
      this.updateEvents()
      this.umbraScenes.forEach(m => (m as any).updateNetworkEvents())
    }, interval)
  }

  stopEventUpdate() {
    if (typeof this.updateTask !== 'undefined') {
      window.clearInterval(this.updateTask)
      delete this.updateTask
    }
  }

  private findLights(umbraScene: UmbraScene): Set<THREE.DirectionalLight> {
    let parentScene
    umbraScene.traverseAncestors(obj => {
      if (obj['isScene']) {
        parentScene = obj
      }
    })

    if (!parentScene || (parentScene && !parentScene.isScene)) {
      return new Set()
    }

    const lights: Set<THREE.DirectionalLight> = new Set()
    parentScene.traverseVisible((obj: THREE.Object3D) => {
      if (obj['isDirectionalLight'] && obj['castShadow']) {
        lights.add(obj as THREE.DirectionalLight)
      }
    })

    return lights
  }

  private pruneOldViews(frame: number): void {
    /**
     * We get no notification when cameras are removed from the scene graph
     * so we'll go and remove views based on their age.
     */
    for (const [view, lastUsed] of this.sharedState.viewLastUseFrame) {
      if (frame - lastUsed < 600) {
        continue
      }

      for (const [cam, view2] of this.sharedState.cameraToView) {
        if (view2 === view) {
          this.sharedState.cameraToView.delete(cam)
          break
        }
      }
      view.destroy()
      this.sharedState.viewLastUseFrame.delete(view)
    }
  }

  private updateViews(): void {
    const shared = this.sharedState

    const lights: Set<THREE.DirectionalLight> = new Set()

    if (this.renderer.shadowMap.enabled) {
      for (const umbraScene of this.umbraScenes) {
        for (const light of this.findLights(umbraScene)) {
          lights.add(light)
        }
      }
    }

    const dir = this.dirVector
    const vector3 = this.tempVector

    const lightDirections = Array.from(lights).map(light => {
      dir.setFromMatrixPosition(light.target.matrixWorld)
      vector3.setFromMatrixPosition(light.matrixWorld)
      dir.sub(vector3)
      return [dir.x, dir.y, dir.z]
    }, lights)

    this.pruneOldViews(this.renderer.info.render.frame)

    for (const [threeCamera, view] of shared.cameraToView) {
      const camera: UmbraCamera = threeCamera

      this.matrixWorldInverse.getInverse(camera.matrixWorld)
      this.projScreenMatrix.multiplyMatrices(camera.projectionMatrix, this.matrixWorldInverse)

      // By default we stream in meshes around the camera, but user can override it.
      if ('umbraStreamingPosition' in camera) {
        this.cameraWorldPosition.copy(camera.umbraStreamingPosition)
      } else {
        camera.getWorldPosition(this.cameraWorldPosition)
      }

      let quality = 0.5
      if ('umbraQuality' in camera) {
        quality = camera.umbraQuality
      }

      const pos = this.cameraWorldPosition
      view.setCamera(
        this.projScreenMatrix.elements,
        [pos.x, pos.y, pos.z],
        quality * this.qualityFactor,
        lightDirections,
      )

      let list: Renderable[] = []
      if (shared.viewRenderables.has(view)) {
        list = shared.viewRenderables.get(view)
        list.length = 0
      } else {
        shared.viewRenderables.set(view, list)
      }

      const batchSize = 500
      let visible: Renderable[] = []
      do {
        visible = view.getVisible(batchSize)
        list.push(...visible)
      } while (visible.length === batchSize)
    }
  }

  update(timeBudget = 7) {
    const downloadLimitReached =
      this.downloadLimit !== 0 && this.getStats().maxBytesDownloaded >= this.downloadLimit

    // If the limit is reached we freeze all updates. Streaming will stop completely.
    if (downloadLimitReached) {
      if (!this.oldState.downloadLimitReached) {
        this.umbrajs.abortDownloads()
      }
    } else {
      const start = performance.now()
      this.runtime.update()
      const updateTook = performance.now() - start
      this.runtime.loadAssets(timeBudget - updateTook)
      this.updateViews()
    }

    this.oldState.downloadLimitReached = downloadLimitReached

    if (this.memoryUsed / this.memoryLimit < 0.25) {
      this.adjustQuality(1.1)
    }
  }

  createScene(apiKey: string, locator: string): UmbraScene {
    if (typeof locator !== 'string') {
      if (typeof locator === 'object') {
        console.error(
          'Connection with an {key, project, model} object is deprecated. Use a locator string instead.',
        )
      }
      throw new TypeError('expected a string argument')
    }

    const umbraScene = new UmbraScene(
      this.runtime,
      this.runtime.createScene(apiKey, locator),
      this.sharedState,
      this.renderer,
      this.features,
      s => this.umbraScenes.delete(s),
    )
    this.umbraScenes.add(umbraScene)
    return umbraScene
  }

  createScenePublic(link: string): UmbraScene {
    if (typeof link !== 'string') {
      if (typeof link === 'object') {
        console.error(
          'Connection with an {key, project, model} object is deprecated. Use a public link string instead.',
        )
      }
      throw new TypeError('expected a string argument')
    }

    const umbraScene = new UmbraScene(
      this.runtime,
      this.runtime.createScenePublic(link),
      this.sharedState,
      this.renderer,
      this.features,
      s => this.umbraScenes.delete(s),
    )
    this.umbraScenes.add(umbraScene)
    return umbraScene
  }

  createSceneLocal(url: string): UmbraScene {
    const scene = this.runtime.createSceneLocal(url)
    const umbraScene = new UmbraScene(
      this.runtime,
      scene,
      this.sharedState,
      this.renderer,
      this.features,
      s => this.umbraScenes.delete(s),
    )
    this.umbraScenes.add(umbraScene)
    return umbraScene
  }

  createSceneWithURL(url: string): UmbraScene {
    return this.createSceneLocal(url)
  }

  /**
   * Returns streaming information. We can't tell which files came from the browser cache
   * so we report lower and upper limits of the true download size.
   *
   * The returned object has the following fields:
   *
   *  'maxBytesDownloaded' an upper limit assuming no file was cached,
   *  'minBytesDownloaded' the corresponding lower limit assuming all duplicates came from cache.
   *  'textureMemoryUse' the number of bytes used by texture assets
   *  'meshMemoryUse' the number of bytes used by mesh assets
   *
   */
  getStats() {
    return Object.assign(this.umbrajs.getStreamingInfo(), {
      textureMemoryUsed: this.textureMemoryUsed,
      meshMemoryUsed: this.meshMemoryUsed,
    })
  }

  private canFitInMemory(bytes: number) {
    return this.memoryUsed + bytes < this.memoryLimit
  }

  private adjustQuality(factor: number) {
    if (this.renderer.info.render.frame == this.lastQualityLowerFrame) {
      return
    }
    this.qualityFactor = Math.max(0, Math.min(1, this.qualityFactor * factor))
    this.lastQualityLowerFrame = this.renderer.info.render.frame
  }

  // Converts a texture descriptor and a pixel buffer to a three.js compatible texture
  private makeTexture(
    info,
    buffer: HeapBufferView,
    glformat,
  ): THREE.CompressedTexture | THREE.DataTexture {
    const pixelData = buffer.getArray().slice() as THREE.TypedArray

    let tex
    if (glformat.compressed) {
      const mip = {
        width: info.width,
        height: info.height,
        data: pixelData as Uint8ClampedArray,
      }
      tex = new THREE.CompressedTexture([mip], info.width, info.height)
    } else {
      tex = new THREE.DataTexture(pixelData, info.width, info.height)
    }

    tex.format = glformat.format
    tex.type = glformat.type
    tex.magFilter = THREE.LinearFilter
    tex.minFilter = THREE.LinearFilter
    tex.anisotropy = 0

    return tex
  }

  // AssetLoad handlers that create and remove materials, textures, and meshes
  private handlers: JobHandlers = {
    LoadMaterial: (data: Assets.MaterialData, assetID: UserPointer) => {
      const material = data
      material.transparent = data.transparent ? true : false
      this.runtime.addAsset(assetID, material)
      return Assets.AssetLoadResult.Success
    },
    UnloadMaterial: (asset: any, assetID: UserPointer) => {
      this.runtime.removeAsset(assetID)
    },
    LoadTexture: (data: Assets.TextureData, assetID: UserPointer) => {
      const info = data.info
      const buffer = data.buffer

      let glformat

      if (ThreeFormats.hasOwnProperty(info.format)) {
        glformat = ThreeFormats[info.format]
      }

      if (!glformat) {
        // At the moment we ignore "UINT32" textures because they can't be rendered with stock three.js shaders.
        if (info.format !== TextureFormat.UINT32) {
          // For others we emit a message since this shouldn't happen.
          console.log('Unknown texture format', TextureFormat[info.format])
        }

        // Add a dummy object for unknown formats. They will appear as a solid black color.
        this.runtime.addAsset(assetID, { isTexture: false })
        return Assets.AssetLoadResult.Success
      }

      if (!this.canFitInMemory(buffer.size)) {
        this.adjustQuality(0.8)
        return Assets.AssetLoadResult.OutOfMemory
      }

      const tex = this.makeTexture(info, buffer, glformat)

      /**
       * A workaround for the case where we directly output colors in gamma space.
       * We make diffuse textures linear to avoid gamma expansion at texture fetch time.
       * This is slightly wrong because texture filtering and shading will be done
       * in gamma space, but this behavior is what people usually expect.
       */
      let gammaOutput = false
      if ('outputEncoding' in this.renderer) {
        // three.js version 112 and after
        gammaOutput = this.renderer['outputEncoding'] === THREE.sRGBEncoding
      } else if ('gammaOutput' in this.renderer) {
        // three.js prior to version 112
        gammaOutput = this.renderer['gammaOutput']
      }

      if (info.type === TextureType.Diffuse && !gammaOutput) {
        tex.encoding = THREE.LinearEncoding
      } else {
        tex.encoding =
          info.colorSpace === ColorSpace.Linear ? THREE.LinearEncoding : THREE.sRGBEncoding
      }

      tex.needsUpdate = true

      this.textureMemoryUsed += buffer.size
      this.assetSizes.set(tex, buffer.size)
      this.runtime.addAsset(assetID, tex)
      return Assets.AssetLoadResult.Success
    },
    UnloadTexture: (texture: any, assetID: UserPointer) => {
      // Free texture data only if it's not a dummy texture
      if (texture.isTexture) {
        texture.dispose()
      }

      if (this.assetSizes.has(texture)) {
        this.textureMemoryUsed -= this.assetSizes.get(texture)
        this.assetSizes.delete(texture)
      }

      this.runtime.removeAsset(assetID)
    },
    LoadMesh: (data: Assets.MeshData, assetID: UserPointer) => {
      /**
       * LoadMesh gives us all the vertex data in load.data.buffers.
       * The buffers are only valid during this handler, and the memory will be
       * reused for other meshes later. Therefore we make copies of the arrays
       * for three.js which is something we would have to do anyway.
       */

      const attribs = {
        position: { components: 3 },
        normal: { components: 3 },
        uv: { components: 2 },
        tangent: { components: 3 },
      }

      let totalSize = 0
      Object.keys(attribs)
        .map(name => data.buffers[name])
        .forEach(buffer => {
          if (buffer) {
            totalSize += buffer.data.size
          }
        })

      if (!this.canFitInMemory(totalSize)) {
        this.adjustQuality(0.8)
        return Assets.AssetLoadResult.OutOfMemory
      }

      const geometry = new THREE.BufferGeometry()
      const indexArray = data.buffers['index'].data.getArray()
      const indices = Array.from(indexArray as any)
      geometry.setIndex(indices as number[])
      geometry.boundingSphere = makeBoundingSphere(data.bounds)

      Object.keys(attribs).forEach(name => {
        const buffer = data.buffers[name] as VertexBuffer

        if (buffer) {
          const view = buffer.data
          const array = view.getArray()
          const attrib = new THREE.Float32BufferAttribute(array.slice(), attribs[name].components)

          if ('setAttribute' in (geometry as any)) {
            // three.js v112
            geometry['setAttribute'](name, attrib)
          } else {
            // three.js prior to v112
            geometry['addAttribute'](name, attrib)
          }
        }
      })

      const mesh: MeshDescriptor = {
        geometry,
        materialDesc: data.material,
      }

      this.meshMemoryUsed += totalSize
      this.assetSizes.set(mesh, totalSize)
      this.runtime.addAsset(assetID, mesh)
      return Assets.AssetLoadResult.Success
    },
    UnloadMesh: (mesh: any, assetID: UserPointer) => {
      if (this.assetSizes.has(mesh)) {
        this.meshMemoryUsed -= this.assetSizes.get(mesh)
        this.assetSizes.delete(mesh)
      }
      // Tell Umbra's runtime that this asset doesn't exist anymore
      this.runtime.removeAsset(assetID)
      // Release three.js's resources
      mesh.geometry.dispose()
    },
  }

  private updateEvents() {
    const progress = this.getStreamingProgress()
    if (this.oldState.progress != progress) {
      if (this.onStreamingUpdate) {
        this.onStreamingUpdate(progress)
      }
      if (progress === 1.0 && this.onStreamingComplete) {
        this.onStreamingComplete()
      }
    }

    this.oldState.progress = progress
  }

  getStreamingProgress(): number {
    return this.runtime.getStreamingProgress()
  }

  dispose() {
    this.stopEventUpdate()

    for (const view of this.sharedState.cameraToView.values()) {
      view.destroy()
    }

    this.umbraScenes.forEach((m: UmbraScene) => m.dispose())

    this.sharedState.cameraToView.clear()
    this.umbraScenes.clear()

    this.runtime.assets.forEach((asset, userPtr) => {
      if ('geometry' in asset) {
        asset.geometry.dispose()
      }
      if ('dispose' in asset) {
        asset.dispose()
      }
    })

    this.assetSizes.clear()
    this.textureMemoryUsed = 0
    this.meshMemoryUsed = 0

    this.runtime.destroy()
    this.runtime = undefined

    deinitUmbra(this.umbrajs)
  }
}

export function initWithThreeJS(renderer: THREE.WebGLRenderer, userConfig: LibraryConfig) {
  if (!renderer) {
    throw new TypeError('"renderer" should be of type THREE.WebGLRenderer')
  }

  return initUmbra(userConfig).then(Umbra => {
    return new UmbrajsThreeInternal(Umbra, renderer)
  })
}

// Hide the library object constructor by wrapping it in an interface
interface UmbrajsThree extends UmbrajsThreeInternal {}
export { UmbraScene as Scene, UmbrajsThree }
export { Loader } from './Loader'
