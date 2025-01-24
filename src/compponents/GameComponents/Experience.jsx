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
            minDistance={0}
        />

        <Physics debug>
            <Lights />
            <Level />
        </Physics>

    </>
}