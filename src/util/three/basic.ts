import * as THREE from "three";

import type { WebGLRenderer } from "three";

let renderer: WebGLRenderer;
let requestId: number;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 1000);
camera.position.z = 3;

const geometry = new THREE.TorusGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xff9f1c, wireframe: true });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const animate = () => {
  requestId = requestAnimationFrame(animate);
  torus.rotation.x += 0.005;
  torus.rotation.y -= 0.005;

  renderer.render(scene, camera);
};

export const createScene = (el: HTMLElement) => {
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el, alpha: true });
  renderer.setSize(el.clientWidth, el.clientHeight);

  animate();
};

export const stopScene = () => {
  geometry.dispose();
  cancelAnimationFrame(requestId);
};
