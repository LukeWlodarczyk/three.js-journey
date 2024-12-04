import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl") as HTMLCanvasElement;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

mesh.position.set(1, -1.2, 0);

// mesh.position.normalize();  make vector value 1
// console.log(mesh.position.length());

mesh.scale.set(2, 0.5, 0.5);

// mesh.rotation.reorder("YXZ");
// mesh.rotation.x = 0.5;
// mesh.rotation.y = -0.5;
// mesh.rotation.z = Math.PI / 2;
mesh.rotation.set(0.5, -0.5, Math.PI / 2, "YXZ");

const axesHelper = new THREE.AxesHelper();

scene.add(axesHelper);

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(0, 0, 4);

// camera.lookAt(mesh.position);

scene.add(camera);

// console.log(mesh.position.distanceTo(camera.position));

const group = new THREE.Group();
group.position.y = 1;
group.rotation.y = 0.6;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
group.add(cube1);
cube1.position.x = -2;

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
group.add(cube2);
cube2.position.x = 2;

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
