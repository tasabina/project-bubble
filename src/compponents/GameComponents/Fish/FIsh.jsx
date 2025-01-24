import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import COLORS from '../Colors';
import Tail from './Tail';
import Body from './Body';
import Fin from './Fin';

export default function Fish() {
    const finRef = useRef(null);
    let time = 0;

    useFrame((_, delta) => {
        if (finRef.current) {
            time += delta;
            const angle = Math.sin(time * 5) * (Math.PI / 9);
            finRef.current.rotation.x = angle;
        }
    });
    
    return (
      <group>
        <Body/>
        <Tail/>
        {/* Top Fin */}
        <Fin ref={finRef} position={[-0.2, 0.85, 0]} rotation={[0, 0, Math.PI / 6]} size={[1, 0.5, 0.1]} color="orange" axis="x"/>
  
        {/* Left Fin */}
        <Fin position={[0.5, 0, 0.7]} rotation={[0, 0, Math.PI / 4]} size={[0.3, 0.1, 0.5]} color="orange" axis="y"/>
  
        {/* Right Fin */}
        <Fin position={[0.5, 0, -0.7]} rotation={[0, 0, -Math.PI / -4]} size={[0.3, 0.1, 0.5]} color="orange" axis="y"/>
      </group>
    );
  }