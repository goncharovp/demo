import React, { useCallback, useState } from 'react'
import './disapear.css'

export const Dissapear = () => {
    // const [largeSquares, setLargeSquares] = useState(Array(36).fill(true));
    const [smallSquaresOpacity, setSmallSquaresOpacity] = useState(Array(250000).fill(1));
    // const [smallSquaresOpacity2, setSmallSquaresOpacity2] = useState(Array(16).fill(1));
    const [zoom, setZoom] = useState(0.5);

    const handleZoomIn = useCallback(() => {
      setZoom(prevZoom => prevZoom * 1.2);
    }, [setZoom]);
    
    const handleZoomOut = useCallback(() => {
      setZoom(prevZoom => prevZoom / 1.2);
    }, [setZoom]);
  
  
    const handleSmallSquareClick = useCallback((index: any) => {
      setSmallSquaresOpacity(prevOpacity => prevOpacity.map((opacity, i) => i === index ? 0 : opacity));
    }, [setSmallSquaresOpacity]);
    

    // const handleSmallSquareClick2 = (index: any) => {
    //     setSmallSquaresOpacity2(prevOpacity => {
    //         const newOpacity = [...prevOpacity];
    //         newOpacity[index] = 0;
    //         return newOpacity;
    //     });
    // };

    const noBigSquare = smallSquaresOpacity.includes(1)
  
    return (
      <div style={{display: 'flex column', alignItems: 'center', justifyContent: 'center'}}>
        <button onClick={handleZoomIn}>+</button>
        <button onClick={handleZoomOut}>-</button>
        <div style={{position: 'relative', overflow: 'hidden'}}>
        <div className="large-square" style={{ order: 1, transform: `scale(${zoom})`, transformOrigin: 'center' }}>
          {smallSquaresOpacity.map((opacity, index) => (
            <div key={index} className={`small-square`} style={{ opacity: opacity }} onClick={() => handleSmallSquareClick(index)} />
          ))}
        </div>
        {/* <div className="small-square-container" style={{ order: 2 }}>
          {smallSquaresOpacity2.map((opacity, index) => (
            <div key={index} className={`small-square2`} style={{ opacity: opacity }} onClick={() => handleSmallSquareClick2(index)} />
          ))}
        </div> */}
        </div>
      </div>
    );
  
}