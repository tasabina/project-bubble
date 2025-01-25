import React, { useState, useEffect } from 'react';
import Bubble from './Bubble';

export default function Bubbles({ position, onCollide }) {
  const [bubbles, setBubbles] = useState([]);

  const generateBubbles = (interval) => {
    setBubbles((prevBubbles) => [
      ...prevBubbles,
      <Bubble position={position} onCollide={onCollide} />
    ]);
  };

  const interval = Math.random()

  useEffect(() => {
    const timer = setInterval(() => {
      generateBubbles(interval);
    }, interval*10000);

    return () => clearInterval(timer);
  }, [position, onCollide]);

  return (
    <group>
      {bubbles}
    </group>
  );
}
