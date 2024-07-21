import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const CubeGrid = () => {
    const canvasRef = useRef<HTMLDivElement>(null!);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const objectList: THREE.Mesh[] = [];


    useEffect(() => {
        const cubesPerRow = 6;
        const cubeSize = 0.3;
        const spacing = 0.1;
        // const padding = 2
//         const width = cubesPerRow * (cubeSize + spacing) + padding;
// const height = cubesPerRow * (cubeSize + spacing) + padding;

        const updateCanvasSize = () => {
//                     const width = cubesPerRow * (cubeSize + spacing) + padding;
// const height = cubesPerRow * (cubeSize + spacing) + padding;
            const width = 300;
            const height = 300;

            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);

        renderer.setClearColor(0xffffff, 0); // Устанавливаем прозрачный фон

        canvasRef.current.appendChild(renderer.domElement);

        camera.position.z = 2;


        for (let i = 0; i < cubesPerRow; i++) {
            for (let j = 0; j < cubesPerRow; j++) {
                const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
                const material = new THREE.MeshBasicMaterial({ color: 0x94f500, transparent: false, opacity: 1 }); 
                const cube = new THREE.Mesh(geometry, material);
                const edges = new THREE.EdgesGeometry(geometry);
                const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 }); // Черный цвет границы
                const edgesLine = new THREE.LineSegments(edges, lineMaterial);
                cube.add(edgesLine);
                cube.position.set(i * (cubeSize + spacing) - cubesPerRow * (cubeSize + spacing) / 2,
                                  j * (cubeSize + spacing) - cubesPerRow * (cubeSize + spacing) / 2,
                                  0);

                cube.userData.isTransparent = false; 

                objectList.push(cube);
                scene.add(cube);
            }
        }

        const handleMouseClick = (event: MouseEvent) => {
            // Преобразуем координаты клика мыши в нормализованные координаты
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            // Пересчитываем луч в направлении клика
            raycaster.setFromCamera(mouse, camera);

            // Проверяем пересечение с объектами
            const intersects = raycaster.intersectObjects(objectList, true);

            if (intersects.length > 0) {
                const selectedObject = intersects[0].object as THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial, THREE.Object3DEventMap>;
                console.log(selectedObject.material.transparent)
                selectedObject.userData.isTransparent = !selectedObject.userData.isTransparent;
                selectedObject.material.transparent = true

                selectedObject.material.opacity = selectedObject.userData.isTransparent ? 0 : 1;

                selectedObject.material.needsUpdate = true;
            }
        };

        window.addEventListener('click', handleMouseClick);

        const animate = () => {
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            renderer.domElement.remove();
            window.removeEventListener('click', handleMouseClick);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return <div ref={canvasRef} />;
}