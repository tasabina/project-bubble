import { CuboidCollider, interactionGroups, RigidBody } from "@react-three/rapier";
import COLORS from '../Colors';

export default function Ground({position})
{
    return (
        <RigidBody
            type="fixed"
            restitution={ 0.2 }
            friction={ 0 }
            position={position}
            collisionGroups={interactionGroups(4, [1, 4])}
        >
            <mesh receiveShadow>
                <boxGeometry args={[100, 0.1, 100]} />
                <meshStandardMaterial color={COLORS.BROWN} />
            </mesh>
        </RigidBody>
    )
}