import React, { useRef, useEffect } from 'react'
import * as THREE from 'three';

export const SeparateCube = () => {
    const canvasRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(500, 500);
    canvasRef?.current?.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial({ color: 9333223 });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.domElement.remove();
    };
  }, []);
//@ts-ignore
  return <div ref={canvasRef} />;

}