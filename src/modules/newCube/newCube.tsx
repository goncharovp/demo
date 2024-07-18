import React, {
  useEffect,
  //  useEffect, 
  useState } from 'react';
// import { Square } from '../square/square';
import './newCube.css'; // Подключение стилей

export const Square = ({setSides}: {setSides: any}) => {
  const initialColors = Array.from({ length: 36 }, () => 'red'); // Создаем массив из 36 белых цветов
  const [colors, setColors] = useState(initialColors);

  const handleClick = (index: number) => {
    const newColors = [...colors];
    newColors[index] = 'green'; // Генерируем случайный цвет
    setColors(newColors);
    if (newColors.every(color => color === 'green')) {
      setSides((prev: any) => [...prev, 'side'])
    }

  };

  return (
    <div className="square">
      {colors.map((color: string, index: number) => (
        <div
          key={index}
          className="little-square"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );

}

export const SquareSmall = () => {
  const initialColors = Array.from({ length: 16 }, () => '#ffffff'); // Создаем массив из 36 белых цветов
  const [colors, setColors] = useState(initialColors);

  const handleClick = (index: number) => {
    const newColors = [...colors];
    newColors[index] = '#' + Math.floor(Math.random() * 16777215).toString(16); // Генерируем случайный цвет
    setColors(newColors);
  };

  return (
    <div className="square2">
      {colors.map((color: string, index: number) => (
        <div
          key={index}
          className="little-square2"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );

}

export const NewCube = ({setChange}: {setChange: any}) => {
  const [sides, setSides] = useState([])
  useEffect(() => {
    if(sides.length === 6) {
      setChange(true)
    }
  }, [setChange, sides.length])
  let x = 0,
    y = 0
  const handleUp = () => {
      x += 10
      const a = document?.querySelector('.cube') as HTMLDivElement
      if (a) {
        a.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`
      }
  }
  const handleDown = () => {
      x -= 10
      const a = document?.querySelector('.cube') as HTMLDivElement
      if (a) {
        a.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`
      }
  }
  const handleRight = () => {
    y -= 10
    const a = document?.querySelector('.cube') as HTMLDivElement
    if (a) {
      a.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`
    }
}
const handleLeft = () => {
  y += 10
  const a = document?.querySelector('.cube') as HTMLDivElement
  if (a) {
    a.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`
  }
}
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <div style={{position: 'relative'}}>
      <div style={{ marginBottom: '20px', gap: 16 }}>
        <button onClick={handleUp} style={{position: 'absolute', left: '100px', top: '-70px'}}>up</button>
        <button onClick={handleLeft} style={{position: 'absolute', left: '-150px', top: '200px'}}>left</button>
        <button onClick={handleDown} style={{position: 'absolute', left: '100px', top: '420px'}}>down</button>
        <button onClick={handleRight} style={{position: 'absolute', left: '410px', top: '200px'}}>right</button>
      </div>
      <div className="cube">
        <div className="side front"><Square setSides={setSides}/></div>
        <div className="side back"><Square setSides={setSides}/></div>
        <div className="side left"><Square setSides={setSides}/></div>
        <div className="side right"><Square setSides={setSides}/></div>
        <div className="side top"><Square setSides={setSides}/></div>
        <div className="side bottom"><Square setSides={setSides}/></div>
      </div>
    </div>
    </div>
  );
}

export const NewCubeSmall = () => {
  let x = 0,
    y = 0
  const handleUp = () => {
      x += 5
      const a = document?.querySelector('.cube') as HTMLDivElement
      if (a) {
        a.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`
      }
  }
  const handleDown = () => {
      x -= 5
      const a = document?.querySelector('.cube') as HTMLDivElement
      if (a) {
        a.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`
      }
  }
  const handleRight = () => {
    y -= 5
    const a = document?.querySelector('.cube') as HTMLDivElement
    if (a) {
      a.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`
    }
}
const handleLeft = () => {
  y -= 5
  const a = document?.querySelector('.cube2') as HTMLDivElement
  if (a) {
    a.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`
  }
}
  return (
    <div>
      {/* <div style={{ display: 'flex',gap: 16, marginBottom: '20px', position: 'absolute', top: 0 }}>
        <button onClick={handleUp}>up</button>
        <button onClick={handleLeft}>left</button>
        <button onClick={handleDown}>down</button>
        <button onClick={handleRight}>right</button>
      </div> */}
      <div className="cube2">
      <div className="side2 front2"><SquareSmall /></div>
        <div className="side2 back2"><SquareSmall /></div>
        <div className="side2 left2"><SquareSmall /></div>
        <div className="side2 right2"><SquareSmall /></div>
        <div className="side2 top2"><SquareSmall /></div>
        <div className="side2 bottom2"><SquareSmall /></div>
      </div>
    </div>
  );
}
