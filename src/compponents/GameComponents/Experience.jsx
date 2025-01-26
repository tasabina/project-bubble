import { OrbitControls } from "@react-three/drei";
import Level from "./Level";
import Lights from "./Lights";
import { Physics } from "@react-three/rapier";
import AnimatedOrbitControls from "./AnimatedOrbitControls";


export default function Experience()
{
    return <>

        <AnimatedOrbitControls/>
        {/* //debug */}
        <Physics gravity={[0, 0, 0]}>
            <Lights />
            <Level />
        </Physics>

    </>
}