import Volcano from './Environment/Volcano';
import Player from './Player';
import Ground from './Environment/Ground';
import Boundary from './Environment/Boundary';
import COLORS from './Colors';
import Stone from './Environment/Stone';
import Bubble from './Bubble/Bubble';
import Bubbles from './Bubble/Bubbles';

export default function Level()
{
    const handleCollision = (event) => {
        console.log(obj, event)
      };
    return <>
        <fog attach="fog" args={[COLORS.BLUE, 20, 50]} />
        <Player/>
        <Boundary position={[-10, 0, 0]} rotation={[0, 0, 0]}/>
        <Boundary position={[10, 0, 0]} rotation={[0, 0, 0]}/>
        <Boundary position={[0, 3, 0]} rotation={[0, 0, Math.PI / 2]}/>
        <group>
            <group position={[0, -6, 0]}>
                <Stone position={[-10, 0, 0]} rotation={[0, 1, 0]} scale={[0.5, 0.5, 0.5]}/>
                <Stone position={[-1, 0, -10]} rotation={[0, 1, 0]} scale={[0.7, 0.5, 0.8]}/>
                <Stone position={[1, 0.2, 0]} rotation={[1, 1, 0]} scale={[0.5, 0.5, 0.5]}/>
                <Stone position={[-10, 0.3, -10]} rotation={[0, 1, 0]} scale={[2, 2, 2]}/>
                <Stone position={[10, 0.3, -3]} rotation={[1, 1, 0]} scale={[2, 2, 2]}/>
                <Stone position={[-10, 0.3, -3]} rotation={[1, 1, 1]} scale={[2, 2, 2]}/>
                <Stone position={[10, 0, 0]} rotation={[0, 1, 1]} scale={[0.7, 0.5, 0.5]}/>
                <Stone position={[1, 0, -3]} rotation={[0, 1, 0]} scale={[1, 1, 2]}/>
            </group>
            <Bubbles position={[-5, -5.3, 0]} onCollide={handleCollision}/>
            <Bubbles position={[5, -5.3, 0]} onCollide={handleCollision}/>
            <Volcano position={[-5, -5.3, 0]}/>
            <Volcano position={[5, -5.2, 0]}/>
            <Ground position={[0, -6, 0]}/>
        </group>
    </>
}