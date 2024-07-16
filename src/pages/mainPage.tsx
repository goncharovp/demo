import * as React from 'react';
import { Square } from "../modules/square/square";
import { Cube } from '../modules/cube/cube';
import { NewCube } from '../modules/newCube/newCube';
// import { ThreeDCube } from '../modules/cube/cube';

export const MainPage = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {/* <Square /> */}
            {/* <Cube /> */}
            <NewCube />
        </div>
    )
}