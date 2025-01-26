import React, { useState, useEffect } from 'react';
import Bubble from './Bubble';
import useGame from '../../store/useGame.jsx'

export default function Bubbles({ position }) {
  const [bubbles, setBubbles] = useState([]);

  const running = useGame()

  const generateBubbles = () => {
    setBubbles((prevBubbles) => [
      ...prevBubbles,
      <Bubble position={position}/>
    ]);
  };

  const range = Math.random()

  useEffect(() => {
    let interval;
    const unsubscribe = useGame.subscribe(
      (state) => state.status,
      (status) => {
        if (status == 'playing') {
          interval = setInterval(() => {
            generateBubbles();
          }, range*10000);
        } else {
          clearInterval(interval);
        }
      },
      { fireImmediately: true }
    );

    return () => {
      clearInterval(interval);
      unsubscribe();
    }
  }, []);

  return (
    <group>
      {running && bubbles}
    </group>
  );
}
