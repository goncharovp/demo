import React, { useState } from 'react'
import './disapear.css'

export const Dissapear = () => {
    // const [largeSquares, setLargeSquares] = useState(Array(36).fill(true));
    const [smallSquaresOpacity, setSmallSquaresOpacity] = useState(Array(36).fill(1));
    const [smallSquaresOpacity2, setSmallSquaresOpacity2] = useState(Array(16).fill(1));

  
    const handleSmallSquareClick = (index: any) => {
        setSmallSquaresOpacity(prevOpacity => {
            const newOpacity = [...prevOpacity];
            newOpacity[index] = 0;
            return newOpacity;
        });
    };

    const handleSmallSquareClick2 = (index: any) => {
        setSmallSquaresOpacity2(prevOpacity => {
            const newOpacity = [...prevOpacity];
            newOpacity[index] = 0;
            return newOpacity;
        });
    };

    const noBigSquare = smallSquaresOpacity.includes(1)
  
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{position: 'relative'}}>
        {noBigSquare && <div className="large-square" style={{ order: 1 }}>
          {smallSquaresOpacity.map((opacity, index) => (
            <div key={index} className={`small-square`} style={{ opacity: opacity }} onClick={() => handleSmallSquareClick(index)} />
          ))}
        </div>}
        <div className="small-square-container" style={{ order: 2 }}>
          {smallSquaresOpacity2.map((opacity, index) => (
            <div key={index} className={`small-square2`} style={{ opacity: opacity }} onClick={() => handleSmallSquareClick2(index)} />
          ))}
        </div>
        </div>
      </div>
    );
  
}