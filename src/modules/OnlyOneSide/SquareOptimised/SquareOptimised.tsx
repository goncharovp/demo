import React, { useCallback, useEffect, useState } from 'react'
import './SquareOptimised.css'
import { CubeArea } from '../CubeArea/CubeArea'
import { SmallCube } from '../SmallCube/SmallCube'


export const SquareOptimised = () => {
    const [side, setSide] = useState(6)
    const arr = Array(side * side).fill(1)
    const [zoom, setZoom] = useState(1);
    const [areaColor, setAreaColor] = useState('')
    const [emptyIndexes, setEmptyIndexes] = useState<number[]>([])
    const [clickedIndex, setClickedIndex] = useState<number | null>(null)
    const [areaIndexesClicked, setAreaIndexesClicked] = useState([])

    const handleAreaClick = (color: string, index: number) => {
        setAreaColor(color) 
        setSide(12)
        setZoom(1)
        setClickedIndex(index)
    }

    const handleBack = () => {
        setSide(6)
        setAreaColor('')
        setZoom(1)
        setClickedIndex(null)
        setAreaIndexesClicked([])
    }

    useEffect(() => {
        if(areaIndexesClicked.length === arr.length) {
            //@ts-ignore
            setEmptyIndexes((prev) => [...prev, clickedIndex])
        }
    }, [areaIndexesClicked.length, arr.length, clickedIndex])

    const handleZoomIn = useCallback(() => {
        setZoom(prevZoom => prevZoom * 1.2);
    }, [setZoom]);

    const handleZoomOut = useCallback(() => {
        setZoom(prevZoom => prevZoom / 1.2);
    }, [setZoom]);
    return (
        <div style={{ display: 'flex column' }}>
            <div style={{ paddingBottom: 8 }}>
                <button onClick={handleZoomIn}>+</button>
                <button onClick={handleZoomOut}>-</button>
                <button onClick={handleBack}>вернуться</button>
            </div>
            <div style={{ overflow: 'hidden', height: '300px', width: '300px' }}>
                <div className={'container'} style={{ transform: `scale(${zoom})`, transformOrigin: 'center', gridTemplateColumns: `repeat(${side}, 1fr)` }}>
                    {!areaColor ? arr.map((el, index) => (
                        <CubeArea key={index} set={handleAreaClick} id={index} emptyIndexes={emptyIndexes}/>
                    )) : 
                    arr.map((el, index) => (
                        <SmallCube key={index} color={areaColor} setAreaIndexesClicked={setAreaIndexesClicked}/>
                    ))}
                </div>
            </div>
        </div>
    )
}