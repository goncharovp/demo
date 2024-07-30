import * as React from 'react';
import  {
    //  useEffect, 
    useState } from 'react'
// import { Square } from "../modules/square/square";
// import { Cube } from '../modules/cube/cube';
import { NewCube, NewCubeSmall } from '../modules/newCube/newCube';
import { Dissapear } from '../modules/disapear/disapear';
// import { SeparateCube } from '../modules/SeparateCube/SeparateCube';
//@ts-ignore
// import { CubeGrid } from 'src/modules/CubeGrid/CubeGrid';

//@ts-ignore
import { ReactCube } from 'src/modules/ReactCube/ReactCube';
// import { ThreeDCube } from '../modules/cube/cube';

export const MainPage = () => {
    const [change, setChange] = useState(false)
    const [variant, setVariant] = useState(3)
    return (
        <div style={{height: '90vh', width: '90vw', display: 'flex', flexDirection: 'column', gap: 16, alignContent: 'center', justifyContent: 'center'}}>
           <div style={{ display: 'flex',  gap: 16,}}>
            <button onClick={() => setVariant(1)}>Куб</button>
            <button onClick={() => setVariant(2)}>Куб из кубов</button>
            <button onClick={() => setVariant(3)}>Грань из квадратов</button>
            {/* <button onClick={() => setVariant(4)}>Большой куб</button> */}
           </div> 
        <div style={{display: 'flex', flexDirection: variant === 3 ? 'row' : 'column', gap: 16, alignContent: 'center', justifyContent: 'center'}}>
            {/* <Square /> */}
            {/* <Cube /> */}
            {variant === 1 && (!change ? <NewCube setChange={setChange}/> :
            <NewCubeSmall />)}
            {variant ===3 && <Dissapear />}
            {variant ===2 && <ReactCube />}
            {/* {variant ===4 && <ReactCube big />} */}
            {/* {variant === 3 && <SeparateCube />} */}
            {/* {variant === 3 && <CubeGrid />} */}
        </div>
        </div>
    )
}