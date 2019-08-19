/**
 * Common utilities for examples.
 */

// Creates a mesh based on a THREE.Box3 bounding box.
function makeBoundingBoxMesh (box) {
  let size = new THREE.Vector3()
  let center = new THREE.Vector3()
  box.getSize(size)
  box.getCenter(center)
  const geometry = new THREE.BoxGeometry(size.x, size.y, size.z)
  geometry.translate(center.x, center.y, center.z)
  const material = new THREE.MeshBasicMaterial({
    color: 0x00FF00,
    wireframe: true
  })
  return new THREE.Mesh(geometry, material)
}

// Sets up the automatic resize handler
function setResizeListener (renderer, camera) {
  const listener = () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  }

  window.addEventListener('resize', listener)
  listener()
}

function makeSphere (radius, color) {
  var geometry = new THREE.SphereGeometry(radius, 32, 32)
  var material = new THREE.MeshBasicMaterial({ color })
  return new THREE.Mesh(geometry, material)
}

// Points the given OrbitControls instance 'controls' at 'model'
function placeCamera (controls, model) {
  let box = model.getBounds()
  let center = model.getCenter()
  let size = new THREE.Vector3()
  box.getSize(size)

  let sphere = new THREE.Sphere()
  box.getBoundingSphere(sphere)
  let diagonal = sphere.radius
  let p = center.clone()
  p.x += diagonal
  p.z += diagonal
  p.y += size.y

  controls.target = center.clone()
  controls.object.position.set(p.x, p.y, p.z)
}

