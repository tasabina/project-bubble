import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Fin({position, rotation, size, color, axis}) {
    const finRef = useRef(null);
    let time = 0;

    useFrame((_, delta) => {
        if (finRef.current) {
            time += delta;
            const angle = Math.sin(time * 5) * (Math.PI / 9);
            switch(axis) {
              case "y":
                finRef.current.rotation.y = angle;
                break;
              case "x":
                finRef.current.rotation.x = angle;
                break;
              case "z":
                finRef.current.rotation.z = angle;
                break;
              default:
                break;
            }
            
        }
    });
    
    return (
      <>
        <mesh ref={finRef} position={position} rotation={rotation} >
          <boxGeometry args={size} />
          <meshStandardMaterial color={color} />
        </mesh>
      </>
    );
  }