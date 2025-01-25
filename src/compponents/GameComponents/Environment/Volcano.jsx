import COLORS from '../Colors';

export default function Volcano({position}) {
    return (
      <group position={position}>
        {/* Volcano Base (Cone) */}
        <mesh position={[0, 0, 0]} castShadow>
          <icosahedronGeometry args={[1, 0]} scale={[3, 1, 1]}/> {/* Radius = 2, Height = 4 */}
          <meshStandardMaterial color={COLORS.BROWN} roughness={1} /> {/* Brown */}
        </mesh>
        <mesh position={[1, -0.5, 0]} castShadow>
          <icosahedronGeometry args={[0.5, 0]} scale={[3, 1, 1]}/> {/* Radius = 2, Height = 4 */}
          <meshStandardMaterial color={COLORS.BROWN} roughness={1} flatShading={true}/> {/* Brown */}
        </mesh>
        <mesh position={[-1, -0.5, 0]} castShadow>
          <icosahedronGeometry args={[0.4, 0]} scale={[3, 2, 1]} rotation={[0.5, 1, 0.4]}/> {/* Radius = 2, Height = 4 */}
          <meshStandardMaterial color={COLORS.BROWN} roughness={1} flatShading={true}/> {/* Brown */}
        </mesh>
  
        {/* Crater (Sphere) */}
        <mesh position={[0, 1.0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>  {/*scale={[0.6, 0.2, 0.6]} */}
          <torusGeometry args={[0.5, 0.3, 4, 4]} /> {/* Crater shape */}
          <meshStandardMaterial color={COLORS.BROWN} roughness={1} /> {/* Dark orange */}
        </mesh>
      </group>
    );
  }
