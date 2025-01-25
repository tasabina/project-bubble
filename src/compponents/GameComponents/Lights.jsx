import COLORS from "./Colors"

export default function Lights() {
    return (
        <>
            <directionalLight
                castShadow
                position={ [ 10, 6, 5 ] }
                intensity={ 4.5 }
                shadow-mapSize={ [ 1024, 1024 ] }
                shadow-camera-near={ 1 }
                shadow-camera-far={ 1000 }
                shadow-camera-top={ 100 }
                shadow-camera-right={ 100 }
                shadow-camera-bottom={ - 100 }
                shadow-camera-left={ - 100 }
            />
            <hemisphereLight skyColor={COLORS.BLUE} groundColor={COLORS.BROWN} intensity={0.8} />
        </>
    )
}