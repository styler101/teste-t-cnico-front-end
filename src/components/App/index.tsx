import React, { useCallback, useEffect } from 'react';
import { CoordinatesProps } from './interfaces';
import './styles.css';

export function App() {
  const [coordinates, setCoordinates] = React.useState<CoordinatesProps>({
    x: 0,
    y: 0,
  });

  async function handleMouseOver(event: any) {
    await setCoordinates({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  }

  const removeCoordinates = useCallback(() => {
    setCoordinates({
      x: 0,
      y: 0,
    });
  }, []);

  const redoCoordinates = React.useCallback(async () => {
    console.log(coordinates);
    await setCoordinates(prev => {
      prev.x = prev.x;
      prev.y = prev.y;
      return prev;
    });
    console.log(coordinates);
  }, []);

  return (
    <div className="wrapper" onMouseDown={handleMouseOver}>
      <header>
        <h2> Teste Técnico Front-end</h2>
        <div className="controls">
          <button className="btn1" onClick={removeCoordinates}>
            Desfazer{' '}
          </button>
          <button className="btn2" onClick={redoCoordinates}>
            Refazer
          </button>
        </div>
      </header>

      <div
        className="bullet"
        style={{
          position: 'absolute',
          top: coordinates.y,
          left: coordinates.x,
        }}
      />
    </div>
  );
}
