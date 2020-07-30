import * as THREE from './ThreeWrapper';
import { PlatformFeatures, Runtime, NativeScene, ConnectionStatus } from '@umbra3d/umbrajs';
import { SharedFrameState } from './SharedFrameState';
import { PublicLink } from './PublicLink';
export interface SceneFactory {
    createScene(link: string | PublicLink): UmbraScene;
    createSceneWithURL(url: string): UmbraScene;
}
interface SceneStatus {
    connected: boolean;
    sceneInfo?: any;
    numVisible: number;
    numShadowCasters: number;
    numCachedMaterials: number;
    numAssets: number;
}
/**
 * A wrapper type for mesh geometry and its material. Only UmbraScene instantiates the
 * THREE.Mesh objects that are passed to the renderer. UmbraScene also creates the final
 * THREE.Material instance using the textures and transparency flag in 'materialDesc'
 */
export interface MeshDescriptor {
    geometry: any;
    materialDesc: any;
}
declare type DisposeCallback = (m: UmbraScene) => void;
export declare class UmbraScene extends THREE.Object3D {
    material: THREE.Material;
    wireframe: boolean;
    freeze: boolean;
    onConnected: () => void;
    onConnectionError: (error: string) => void;
    onDisconnected: () => void;
    onConnectionChanged: (connected: ConnectionStatus) => void;
    onMeshChanged: () => void;
    readonly isLOD = true;
    readonly autoUpdate = true;
    readonly name = "UmbraScene";
    set quality(value: number);
    private renderer;
    private materialPool;
    private shaderPatcher;
    private sharedState;
    private stats;
    private diagnostics;
    private umbra;
    private onDispose;
    private oldState;
    constructor(runtime: Runtime, scene: NativeScene, sharedState: SharedFrameState, renderer: THREE.WebGLRenderer, features: PlatformFeatures, onDispose?: DisposeCallback);
    get opaqueMaterial(): THREE.Material;
    set opaqueMaterial(mat: THREE.Material);
    getInfo(): SceneStatus;
    getBounds(): THREE.Box3;
    getCenter(): THREE.Vector3;
    private updateStreamingEvents;
    private updateNetworkEvents;
    update: (camera: THREE.Camera) => void;
    dispose(): void;
    private isPBREnabled;
}
export {};
