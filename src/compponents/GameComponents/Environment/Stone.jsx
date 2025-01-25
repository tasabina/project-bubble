import COLORS from '../Colors';

export default function Stone({position, rotation, scale})
{
    return (
        <mesh castShadow position={position} rotation={rotation} scale={scale} >
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color={COLORS.YELLOW} flatShading={true}/>
        </mesh>
    )
}