import { OrbitControls } from "@react-three/drei";
import Level from "./Level";
import Lights from "./Lights";
import { Physics } from "@react-three/rapier";


export default function Experience()
{
    return <>

        <OrbitControls
            enableZoom={true}
            enableRotate={true}
            enablePan={false}
            minDistance={10}
        />

        <Physics  gravity={[0, 0, 0]}>
            <Lights />
            <Level />
        </Physics>

    </>
}