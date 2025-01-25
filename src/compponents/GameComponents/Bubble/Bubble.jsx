import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import COLORS from "../Colors";
import { interactionGroups, RigidBody } from "@react-three/rapier";

export default function Bubble({position, onCollide})
{
    let time = 0;
    const rigidBodyRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
          if (rigidBodyRef.current) {
            // Apply an upward force every 2 seconds
            rigidBodyRef.current.applyImpulse({ x: 0, y: 1, z: 0 }, true);
          }
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

    const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    return (
        <RigidBody
            ref={ rigidBodyRef }
            name="Bubble"
            canSleep={ false }
            colliders="ball"
            restitution={ 0.2 }
            friction={ 1 } 
            linearDamping={ 0.5 }
            angularDamping={ 0.5 }
            position={ position }
            collisionGroups={interactionGroups(0, [0, 1])}
            onCollisionEnter={(event) => {
                onCollide && onCollide(this, event);
            }}
        >
            <mesh castShadow >
                <icosahedronGeometry args={[getRandomArbitrary(0.25, 0.4), 0]} />
                <meshStandardMaterial
                    metalness={0}
                    roughness={0}
                    envMapIntensity={1}
                    color={COLORS.BLUE}
                    flatShading={false}
                    transparent={true}
                    opacity={0.3}
                    reflectivity={1}
                    refractionRatio={1}
                    specular={"red"}
                    shininess={10}
                    wireframe={true}
                    />
            </mesh>
        </RigidBody>
    )
}