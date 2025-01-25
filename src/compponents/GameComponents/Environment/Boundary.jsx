import { interactionGroups, RigidBody } from '@react-three/rapier'

export default function Boundary({position, rotation})
{
  return (
    <RigidBody
        type="fixed"
        position={position}
        rotation={rotation}
        collisionGroups={interactionGroups(4, [1, 4])}
    >
      <mesh>
        <boxGeometry args={[1, 100, 100]} />
        <meshStandardMaterial color="gray" opacity={0} transparent={true} />
      </mesh>
    </RigidBody>
  );
};