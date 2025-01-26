import COLORS from '../Colors';
import Tail from './Tail';
import Body from './Body';
import Fin from './Fin';
import { CuboidCollider } from '@react-three/rapier';

export default function Fish() {
    return (
      <group>
        {/* <CuboidCollider position={[0, 0, 0]} args={[1 ,1 ,1]}/> */}
        <Body/>
        <Tail/>
        {/* Top Fin */}
        <Fin position={[-0.2, 0.85, 0]} rotation={[0, 0, Math.PI / 6]} size={[1, 0.5, 0.1]} color={COLORS.BEGE} axis="x"/>
  
        {/* Left Fin */}
        <Fin position={[0.5, 0, 0.7]} rotation={[0, 0, Math.PI / 4]} size={[0.3, 0.1, 0.5]} color={COLORS.BEGE} axis="y"/>
  
        {/* Right Fin */}
        <Fin position={[0.5, 0, -0.7]} rotation={[0, 0, -Math.PI / -4]} size={[0.3, 0.1, 0.5]} color={COLORS.BEGE} axis="y"/>
      </group>
    );
  }