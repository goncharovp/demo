import React, {
  //  useEffect, 
  useState } from 'react';
// import { Square } from '../square/square';
import './newCube.css'; // Подключение стилей

export const Square = () => {
  const initialColors = Array.from({ length: 36 }, () => '#ffffff'); // Создаем массив из 36 белых цветов
  const [colors, setColors] = useState(initialColors);

  const handleClick = (index: number) => {
    const newColors = [...colors];
    newColors[index] = '#' + Math.floor(Math.random() * 16777215).toString(16); // Генерируем случайный цвет
    setColors(newColors);
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

export const NewCube = () => {
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
  const a = document?.querySelector('.cube') as HTMLDivElement
  if (a) {
    a.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`
  }
}
  return (
    <div>
      <div style={{ marginBottom: '20px', position: 'absolute', top: 0 }}>
        <button onClick={handleUp}>up</button>
        <button onClick={handleLeft}>left</button>
        <button onClick={handleDown}>down</button>
        <button onClick={handleRight}>right</button>
      </div>
      <div className="cube">
        <div className="side front"><Square /></div>
        <div className="side back"><Square /></div>
        <div className="side left"><Square /></div>
        <div className="side right"><Square /></div>
        <div className="side top"><Square /></div>
        <div className="side bottom"><Square /></div>
      </div>
    </div>
  );
}
