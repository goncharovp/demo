import React, { useState, useCallback, useMemo } from 'react'
import { Canvas } from 'react-three-fiber';
import { Euler } from 'three';

export const ReactCube = () => {
    const cubesPerRow = 36;
    const cubeSize = 0.01;
    const spacing = 0.05;

    const [rotationAngle, setRotationAngle] = useState([0, 0, 0]);
    const [opacityMap, setOpacityMap] = useState<{ [key: string]: number }>({});

    const handleRotate = useCallback((axis: number) => {
        setRotationAngle((prev) => prev.map((angle, index) => index === axis ? angle + 0.2 : angle));
    }, []);

    const Cube = ({ position, coords, cubeName }: { position: any, coords: any, cubeName: string }) => {
        const outerLayer = useMemo(() => coords[2] === 0 || coords[2] === 5 || coords[1] === 0 || coords[1] === 5 || coords[0] === 0 || coords[0] === 5, [coords]);

        const handleClick = () => {
            if (outerLayer) {
                setOpacityMap((prev) => ({
                    ...prev,
                    [cubeName]: prev[cubeName] === 0 || prev[cubeName] === undefined ? 1 : 0.2
                }));
            }
        }

        return (
            <mesh position={position} onClick={coords ? handleClick : undefined}>
                <boxGeometry args={[cubeSize, cubeSize, cubeSize]} />
                <meshStandardMaterial color={'hotpink'} transparent opacity={opacityMap[cubeName] || 1} />
            </mesh>
        )
    }

    const generateCubes = useCallback(() => {
        const cubes = [];
        for (let i = 0; i < cubesPerRow; i++) {
            for (let j = 0; j < cubesPerRow; j++) {
                for (let k = 0; k < cubesPerRow; k++) {
                    cubes.push(
                        <Cube key={`${i}-${j}-${k}`} coords={[i, j, k]} cubeName={`${i}-${j}-${k}`} position={[i * (cubeSize + spacing) - cubesPerRow * (cubeSize + spacing) / 2, j * (cubeSize + spacing) - cubesPerRow * (cubeSize + spacing) / 2, k * (cubeSize + spacing) - (cubesPerRow - 1) * (cubeSize + spacing) / 2]} />
                    );
                }
            }
        }
        return cubes;
    }, [cubesPerRow, cubeSize, spacing, opacityMap]);

    const cubes = useMemo(() => generateCubes(), [generateCubes]);

    return (
        <>
            <Canvas style={{ height: 600 }}>
                <ambientLight intensity={1.6} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <group rotation={[...rotationAngle] as unknown as Euler | undefined}>
                    {cubes}
                </group>
            </Canvas>
            <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => handleRotate(0)}>Rotate X</button>
                <button onClick={() => handleRotate(1)}>Rotate Y</button>
                <button onClick={() => handleRotate(2)}>Rotate Z</button>
            </div>
        </>
    );
};