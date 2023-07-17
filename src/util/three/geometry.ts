import * as THREE from "three";
import { debounce } from "radash";
import { randomNumber } from "@/util/general/math";

import type { WebGLRenderer } from "three";

let renderer: WebGLRenderer;
let requestId: number;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2f2f2f);
const camera = new THREE.PerspectiveCamera(65);

const randomColor = () => {
  return new THREE.Color("#000000".replace(/0/g, () => (~~(Math.random() * 16)).toString(16)));
};

for (let i = 0; i < 1500; i++) {
  const material = new THREE.MeshPhongMaterial({
    color: randomColor(),
    flatShading: true
  });

  const box = new THREE.BoxGeometry(randomNumber(1, 5), randomNumber(1, 5), randomNumber(1, 5));
  const torus = new THREE.TorusGeometry(randomNumber(0.1, 5.9), Math.random());
  const cylinder = new THREE.CylinderGeometry(randomNumber(1, 5), randomNumber(1,5), randomNumber(1,5));
  const sphere = new THREE.SphereGeometry(randomNumber(0.1, 5.9));

  let mesh;

  const number = Math.random();
  if (number < 0.25) {
    mesh = new THREE.Mesh(box, material);
  } else if (number < 0.5) {
    mesh = new THREE.Mesh(torus, material);
  } else if (number < 0.75) {
    mesh = new THREE.Mesh(sphere, material);
  } else {
    mesh = new THREE.Mesh(cylinder, material);
  }

  mesh.position.x = Math.random() * 1100 - 500;
  mesh.position.y = 0;
  mesh.position.z = Math.random() * 1100 - 1000;
  mesh.rotation.set(Math.random(), Math.random(), Math.random());

  mesh.updateMatrix();
  scene.add(mesh);
}

const dirLight1 = new THREE.DirectionalLight( 0xffffff, 3 );
dirLight1.position.set( 1, 1, 1 );
scene.add( dirLight1 );

const dirLight2 = new THREE.DirectionalLight( 0x002288, 3 );
dirLight2.position.set( - 1, - 1, - 1 );
scene.add( dirLight2 );

const ambientLight = new THREE.AmbientLight( 0x2c2c2c );
scene.add( ambientLight );

function onResize() {
  const element = document.getElementById("canvasWrapper");
  document.getElementById("canvas")!.style.height = "";
  document.getElementById("canvas")!.style.width = "";

  camera.aspect = element!.parentElement!.clientWidth / 650;
  renderer.setSize(element!.parentElement!.clientWidth, 650);

  camera.updateProjectionMatrix();
}

export const cameraSlide = (x?: number, y?: number, z?: number) => {
  camera.position.set(x ?? 0, y ?? 15, z ?? 0);
  camera.updateProjectionMatrix();
};

export const cameraRotate = (x?: number, y?: number, z?: number) => {
  camera.rotation.set(x ?? 0, y ?? 0, z ?? 0);
  camera.updateProjectionMatrix();
};

const animate = () => {
  requestId = requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

export const createScene = (el: HTMLElement) => {
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
  renderer.setSize(el.clientWidth, 650);
  camera.aspect = el.clientWidth / el.clientHeight;
  camera.updateProjectionMatrix();
  window.addEventListener("resize", debounce({ delay: 150 }, onResize));

  animate();
};

export const stopScene = () => {
  cancelAnimationFrame(requestId);
};
