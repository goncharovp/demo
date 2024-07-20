import * as React from 'react';
import  {
    //  useEffect, 
    useState } from 'react'
// import { Square } from "../modules/square/square";
// import { Cube } from '../modules/cube/cube';
import { NewCube, NewCubeSmall } from '../modules/newCube/newCube';
import { Dissapear } from '../modules/disapear/disapear';
import { SeparateCube } from '../modules/SeparateCube/SeparateCube';
//@ts-ignore
import { CubeGrid } from 'src/modules/CubeGrid/CubeGrid';
// import { ThreeDCube } from '../modules/cube/cube';

export const MainPage = () => {
    const [change, setChange] = useState(false)
    const [variant, setVariant] = useState(3)
    return (
        <div style={{height: '90vh', width: '90vw', display: 'flex', flexDirection: 'column', gap: 16, alignContent: 'center', justifyContent: 'center'}}>
           <div style={{ display: 'flex', flexDirection: 'column', gap: 16,}}>
            <button onClick={() => setVariant(1)}>Куб</button>
            <button onClick={() => setVariant(2)}>Грань</button>
            <button onClick={() => setVariant(3)}>Отдельный кубик</button>
           </div> 
        <div style={{display: 'flex', flexDirection: variant === 3 ? 'row' : 'column', gap: 16, alignContent: 'center', justifyContent: 'center'}}>
            {/* <Square /> */}
            {/* <Cube /> */}
            {variant === 1 && (!change ? <NewCube setChange={setChange}/> :
            <NewCubeSmall />)}
            {variant ===2 && <Dissapear />}
            {/* {variant === 3 && <SeparateCube />} */}
            {variant === 3 && <CubeGrid />}
        </div>
        </div>
    )
}