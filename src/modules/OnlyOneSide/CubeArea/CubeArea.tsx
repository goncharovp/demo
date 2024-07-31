import React, { useEffect, useMemo, useState } from 'react'
import './CubeArea.css'

export const CubeArea = ({ set, id, emptyIndexes }: {set: any, id: number, emptyIndexes: number[]}) => {
    const [opacity, setOpacity] = useState(1)
    useEffect(() => {
        if(emptyIndexes.includes(id)) {
            setOpacity(0)
        }
    }, [emptyIndexes, id])
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const color = useMemo(() => getRandomColor(), [])
    const handleClick = () => {
        set(color, id)
    }

    return (
        <div onClick={emptyIndexes.includes(id) ? undefined : handleClick} className={'CubeArea'} style={{ backgroundColor: color, opacity }}/>
    )
}