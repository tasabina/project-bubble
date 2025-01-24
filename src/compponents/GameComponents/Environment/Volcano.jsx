import COLORS from '../Colors';

export default function Volcano() {
    return (
      <group>
        {/* Volcano Base (Cone) */}
        <mesh position={[0, 0, 0]}>
          <coneGeometry args={[1.5, 2, 5]} /> {/* Radius = 2, Height = 4 */}
          <meshStandardMaterial color={COLORS.BROWN} roughness={1} /> {/* Brown */}
        </mesh>
  
        {/* Crater (Sphere) */}
        <mesh position={[0, 1.0, 0]} rotation={[Math.PI / 2, 0, 0]}>  {/*scale={[0.6, 0.2, 0.6]} */}
          <torusGeometry args={[0.5, 0.3, 4, 4]} /> {/* Crater shape */}
          <meshStandardMaterial color={COLORS.BROWN} roughness={0.8} /> {/* Dark orange */}
        </mesh>
      </group>
    );
  }
