import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl") as HTMLCanvasElement;

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// vanilla js
// let time = Date.now();

// const tick = () => {
//   const currentTime = Date.now();
//   const deltaTime = currentTime - time;
//   time = currentTime;

//   console.log(deltaTime);

//   // mesh.position.x += 0.01;
//   // mesh.position.z -= 0.01;
//   mesh.rotation.y -= 0.001 * deltaTime;

//   renderer.render(scene, camera);

//   requestAnimationFrame(tick);
// };

// threejs clock
// const clock = new THREE.Clock();

// const tick = () => {
//   const elapsedTime = clock.getElapsedTime();

//   // mesh.rotation.y = elapsedTime * Math.PI * 2;
//   // mesh.rotation.y = Math.cos(elapsedTime);
//   // mesh.position.y = Math.sin(elapsedTime);
//   // mesh.position.x = Math.cos(elapsedTime);

//   camera.position.y = Math.sin(elapsedTime);
//   camera.position.x = Math.cos(elapsedTime);
//   camera.lookAt(mesh.position);

//   renderer.render(scene, camera);

//   requestAnimationFrame(tick);
// };

// gsap
import gsap from "gsap";

gsap.to(mesh.position, { x: 3, duration: 1, delay: 1 });
gsap.to(mesh.position, { x: 0, duration: 1, delay: 2 });

const tick = () => {
  renderer.render(scene, camera);

  requestAnimationFrame(tick);
};

tick();
