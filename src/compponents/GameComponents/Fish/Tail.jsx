import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import COLORS from '../Colors';

export default function Tail() {
    const tileRef = useRef(null);
    let time = 0;

    useFrame((_, delta) => {
        if (tileRef.current) {
            time += delta;
            const angle = Math.sin(time * 6) * (Math.PI / 9);
            tileRef.current.rotation.y = angle;
        }
    });
    
    return (
        <>
            {/* Tail */}
            <group ref={tileRef}  position={[-1.1, 0, 0]}>
                <mesh position={[0, -0.3, 0]} rotation={[0, 0, Math.PI / 4]} >
                    <boxGeometry args={[0.6, 0.5, 0.1]} /> {/* A box for the tail */}
                    <meshStandardMaterial color={COLORS.BEGE} />
                </mesh>
                <mesh position={[0, 0.3, 0]} rotation={[0, 0, Math.PI / -4]} >
                    <boxGeometry args={[0.6, 0.5, 0.1]} /> {/* A box for the tail */}
                    <meshStandardMaterial color={COLORS.BEGE} />
                </mesh>
            </group>
        </>
    );
  }