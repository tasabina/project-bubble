import COLORS from '../Colors';

export default function Body() {
    return (
      <>
        <group>
            {/* Body */}
            <mesh position={[0, 0, 0]} castShadow>
                <octahedronGeometry args={[1, 3]} />
                <meshStandardMaterial color={COLORS.RED} flatShading={true}/>
            </mesh>
            {/* Eyes */}
            <mesh position={[0.5, 0.4, 0.7]} castShadow>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="black" flatShading={true}/>
            </mesh>
            <mesh position={[0.5, 0.4, -0.7]} castShadow>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="black" flatShading={true}/>
            </mesh>
            <mesh position={[1, 0, 0]} rotation={[Math.PI / -2, 0, 0]} castShadow>
                <octahedronGeometry args={[0.1, 4]}/>
                <meshStandardMaterial color={COLORS.BEGE} flatShading={true}/>
            </mesh>
            <mesh position={[0.95, -0.2, 0]} rotation={[Math.PI / -2, 0, 0]} castShadow>
                <octahedronGeometry args={[0.1, 4]}/>
                <meshStandardMaterial color={COLORS.BEGE} flatShading={true}/>
            </mesh>
        </group>
      </>
    );
  }