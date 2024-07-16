import * as React from 'react';
import { useState } from "react";
import './square.css';


export const Square = () => {
    const initialColors = Array.from({ length: 36 }, () => '#ffffff'); // Создаем массив из 36 белых цветов
    const [colors, setColors] = useState(initialColors);
  
    const handleClick = (index: number) => {
      const newColors = [...colors];
      newColors[index] = '#' + Math.floor(Math.random() * 16777215).toString(16); // Генерируем случайный цвет
      setColors(newColors);
    };
  
    return (
      <div className="cube">
        {colors.map((color, index) => (
          <div
            key={index}
            className="little-cube"
            style={{ backgroundColor: color }}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
    );
  
}