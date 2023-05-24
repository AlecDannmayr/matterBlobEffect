import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";

//texture
const loader = new THREE.TextureLoader();
const cross = loader.load("./circle.png");

// Debug
const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Objects Cirlces

const outterCricle = new THREE.TorusGeometry(1.25, 1, 1, 100);
const middleCricle = new THREE.TorusGeometry(0.75, 1, 1, 50);
const innerCricle = new THREE.TorusGeometry(0.25, 1, 1, 50);

//partciles

const particles = new THREE.TorusKnotGeometry( 6.213, 3.67, 100, 16 );
const particalsCount = 10000;
const posArray = new Float32Array(particalsCount * 3);
const geometry = new THREE.BoxGeometry( 1, 1, 1 );

//TorusKnot
// Materials

const Cubematerial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

const material = new THREE.PointsMaterial({
  size: .01,
  color: "white",
});

const particalMaterial = new THREE.MeshBasicMaterial({
  size: .01,
  map: cross,
  transparent: true,
  color: "white",
});

material.color = new THREE.Color(0xffffff);


for (let i = 0; i < particalsCount * 3; i++) {
  // posArray[i] = Math.random()
  posArray[i] = (Math.random() - 0.2) * 5;
}
particles.setAttribute("position", new THREE.BufferAttribute(posArray, 3));


// Mesh
const sphere = new THREE.Points(outterCricle, material);
const middleSphere = new THREE.Points(middleCricle, material);
const innerSphere = new THREE.Points(innerCricle, material);
const particalsMesh = new THREE.Points(particles, particalMaterial);
scene.add(sphere, middleSphere, innerSphere, particalsMesh);

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//mouse



// document.addEventListener("mousemove", animateParticules);

// let mouseX = 0;
// let mouseY = 0;

// function animateParticules(event) {
//   mouseY = event.clientY;
//   mouseX = event.clientX;
// }

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x21282a);

/**
 * Animate
 */

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
 sphere.rotation.z = 0.1 * elapsedTime;
 middleSphere.rotation.z = -0.1 * elapsedTime
 innerSphere.rotation.z = 0.1 * elapsedTime
  /// moved before clicked!
  particalsMesh.rotation.y = -1 * elapsedTime;
  // if (mouseX > 0) {
  //   particalsMesh.rotation.x = -mouseY * (elapsedTime * 0.00008);
  //   particalsMesh.rotation.y = -mouseX * (elapsedTime * 0.00008);
  // }
  // Update Orbital Controls
  // controls.update()

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
