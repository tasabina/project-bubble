import COLORS from '../Colors';

export default function Body() {
    return (
      <>
        <group>
            {/* Body */}
            <mesh position={[0, 0, 0]} >
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color={COLORS.RED} />
            </mesh>
            {/* Eyes */}
            <mesh position={[0.5, 0.4, 0.7]} >
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="black" />
            </mesh>
            <mesh position={[0.5, 0.4, -0.7]} >
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="black" />
            </mesh>
            <mesh position={[1, 0, 0]} rotation={[Math.PI / -2, 0, 0]} >
                <capsuleGeometry args={[0.1, 0.1, 16, 16]}/>
                <meshStandardMaterial color={COLORS.BEGE} />
            </mesh>
            <mesh position={[0.95, -0.2, 0]} rotation={[Math.PI / -2, 0, 0]} >
                <capsuleGeometry args={[0.1, 0.1, 16, 16]}/>
                <meshStandardMaterial color={COLORS.BEGE} />
            </mesh>
        </group>
      </>
    );
  }