import * as React from 'react';
import  {
    //  useEffect, 
    useState } from 'react'
// import { Square } from "../modules/square/square";
// import { Cube } from '../modules/cube/cube';
import { NewCube, NewCubeSmall } from '../modules/newCube/newCube';
// import { ThreeDCube } from '../modules/cube/cube';

export const MainPage = () => {
    const [change, setChange] = useState(false)
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 16, alignContent: 'center', justifyContent: 'center'}}>
            {/* <Square /> */}
            {/* <Cube /> */}
            {!change ? <NewCube setChange={setChange}/> :
            <NewCubeSmall />}
        </div>
    )
}