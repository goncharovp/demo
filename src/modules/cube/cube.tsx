import React from 'react';
import { Square } from '../square/square';
import './cube.css'; // Подключение стилей


export const Cube = () => {
  return (
    <div className="cube">
      <div className="cube-face front">
        <Square />
      </div>
      <div className="cube-face back">
        <Square />
      </div>
      <div className="cube-face top">
        <Square />
      </div>
      <div className="cube-face bottom">
        <Square />
      </div>
      <div className="cube-face left">
        <Square />
      </div>
      <div className="cube-face right">
        <Square />
      </div>
    </div>
  );
}
