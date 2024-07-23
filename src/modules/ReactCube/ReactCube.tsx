import React, { useState } from 'react'
import { Canvas } from 'react-three-fiber';
import { Euler } from 'three';

export const ReactCube = () => {
    const cubesPerRow = 6;
    const cubeSize = 0.3;
    const spacing = 0.05;

    const [rotationAngle, setRotationAngle] = useState([0, 0, 0]);

    const handleRotateX = () => {
        setRotationAngle([rotationAngle[0] + 0.2, rotationAngle[1], rotationAngle[2]]);
    };

    const handleRotateY = () => {
        setRotationAngle([rotationAngle[0], rotationAngle[1] + 0.2, rotationAngle[2]]);
    };

    const handleRotateZ = () => {
        setRotationAngle([rotationAngle[0], rotationAngle[1], rotationAngle[2] + 0.2]);
    };
    
    const [cubeOpacity, setCubeOpacity] = useState([]);
    


    const Cube = ({ position, coords, cubeName, cubeOpacity, setCubeOpacity }: { position: any, coords: any, cubeName: string, cubeOpacity: any, setCubeOpacity: any }) => {
        // const [opacity, setOpasity] = useState(1)
        const outerLayer = coords[2] === 0 || coords[2] === 5 || coords[1] === 0 || coords[1] === 5 || coords[0] === 0 || coords[0] === 5;
// console.log(cubeOpacity)
                const handleClick = () => {
            if(outerLayer) {
                setCubeOpacity((prev: any) => ([
                    ...prev, cubeName
                ]))
            }
        }
        return (
            <mesh position={position} onClick={coords ? handleClick : undefined}>
                <boxGeometry args={[cubeSize, cubeSize, cubeSize]} />
                <meshStandardMaterial color={outerLayer ? '' : 'green'} transparent opacity={cubeOpacity.includes(cubeName) ? 0 : 1} />
            </mesh>
        )
    }
    const cubes = [];

    for (let i = 0; i < cubesPerRow; i++) {
        for (let j = 0; j < cubesPerRow; j++) {
            for (let k = 0; k < cubesPerRow; k++) {
                
                cubes.push(
                    <Cube key={`${i}-${j}-${k}`} coords={[i, j, k]} cubeOpacity={cubeOpacity} setCubeOpacity={setCubeOpacity} cubeName={`${i}-${j}-${k}`} position={[i * (cubeSize + spacing) - cubesPerRow * (cubeSize + spacing) / 2, j * (cubeSize + spacing) - cubesPerRow * (cubeSize + spacing) / 2, k * (cubeSize + spacing) - (cubesPerRow - 1) * (cubeSize + spacing) / 2]} />
                );
            }
        }
    }


    return (
        <>
        <Canvas style={{ height: 600 }}>
            <ambientLight intensity={1.6} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <group rotation={rotationAngle as unknown as Euler | undefined}>
            {cubes}
            </group>
        </Canvas>
        <div style={{display: 'flex', gap: 8}}>
        <button onClick={handleRotateX}>Rotate X</button>
        <button onClick={handleRotateY}>Rotate Y</button>
        <button onClick={handleRotateZ}>Rotate Z</button>
        </div>
</>
    );
};
