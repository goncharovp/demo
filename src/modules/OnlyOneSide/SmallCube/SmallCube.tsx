import React, { useState } from 'react'
import './SmallCube.css'

export const SmallCube = ({color, setAreaIndexesClicked}: {color: string, setAreaIndexesClicked: any}) => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        if(setAreaIndexesClicked) {
            setAreaIndexesClicked((prev: any) => [...prev, 1])
        }
        setClicked(true)
    }

    return (
        <div onClick={clicked ? undefined : handleClick} className={'Cube'} style={{ backgroundColor: color, opacity: clicked ? 0 : 1 }}/>
    )
}