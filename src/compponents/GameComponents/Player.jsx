import { interactionGroups, quat, RigidBody } from "@react-three/rapier";
import Fish from "./Fish/FIsh";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { Euler, MathUtils, Quaternion, Vector3 } from "three";
import { getDirection } from "three/tsl";

export default function Player({ onCollide })
{
    const [ subscribeKeys, getKeys ] = useKeyboardControls();

    const playerRef  = useRef(null)
    const speed = 5;
    const rotationSpeed = 0.1;
    const maxX = 5;

    // getDirection = () => {
    //     var matrix = new THREE.Matrix4();
    //     matrix.extractRotation( mesh.matrix );

    //     var direction = new THREE.Vector3( 0, 0, 1 );
    //     direction = matrix.multiplyVector3( direction );
    // }


    useFrame((_, delta) =>
        {

            if (!playerRef.current) return;
            const body = playerRef.current;

            const { forward, backward, leftward, rightward } = getKeys()

            const impulse = { x: 0, y: 0, z: 0 }
            const torque = { x: 0, y: 0, z: 0 }
            const impulseStrength = 50 * delta
            const torqueStrength = 2 * delta

            const position = body.translation();

            // Check if the x position exceeds the max value
            if (position.x > maxX) {
              // Reset position to the maxX value
              body.setTranslation({ x: maxX, y: position.y, z: position.z }, true);
            }

            // Determine the rotation based on key press
            let rotationY = body.rotation.y;
            let direction = 0
            if(rightward) {
                rotationY = -Math.PI;
                direction = 0.5;

                impulse.x += impulseStrength
                torque.z -= torqueStrength
            } else if (leftward) {
                rotationY = Math.PI;
                direction = -0.5;

                impulse.x -= impulseStrength
                torque.z += torqueStrength
            } else {
                direction = 0;
                impulse.x = 0
                torque.z = 0
            }
    
            // Apply the new rotation
            const newRotation = new Quaternion().setFromEuler(new Euler(0, rotationY, 0));
            playerRef.current.setRotation(newRotation, true);

            playerRef.current.applyImpulse(impulse)
            playerRef.current.applyTorqueImpulse(torque)


            // if (playerRef.current) {
            //     const body = playerRef.current;
            //     const { forward, backward, leftward, rightward } = getKeys()

            //     const impulse = { x: 0, y: 0, z: 0 }
            //     const torque = { x: 0, y: 0, z: 0 }

            //     const impulseStrength = 0.6 * delta
            //     const torqueStrength = 0.2 * delta

            //     const quaternion = quat(body.rotation());

            //     if(leftward) {
            //         body.applyImpulse({ x: -speed, y: 0, z: 0 });
            //         if (!direction || direction && direction !== 'leftward') {
            //             const targetRotation = quat(new Euler(0, Math.PI, 0));
            //             body.rotation.y = targetRotation
            //             // body.setAngvel(targetRotation, false);
            //             setDirection('leftward')
            //         }
            //     } else if(rightward) {
            //         if (!direction || direction && direction !== 'rightward') {
            //             const targetRotation = new Euler(0, Math.PI, 0);
            //             body.rotation.y = targetRotation
            //             // body.setRotation({ w: 1.0, x: 0.0, y: -Math.PI, z: 0.0 }, true)
            //             // body.setAngvel(targetRotation, false);
            //             setDirection('rightward')
            //         }
            //         body.applyImpulse({ x: speed, y: 0, z: 0 });
            //     } else {
            //         body.setLinvel({ x: 0, y: 0, z: 0 });
            //         const targetRotation = new Euler(0, 0, 0);
            //         body.setAngvel(targetRotation, true);
            //     }

            //     // body.applyImpulse(impulse)
            //     // body.applyTorqueImpulse(torque)
            // }
        })

    return (
        <RigidBody
            ref={ playerRef }
            canSleep={ false }
            colliders="ball"
            restitution={ 0.2 }
            friction={ 1 } 
            linearDamping={ 0.5 }
            angularDamping={ 0.5 }
            position={ [ 0, 1, 0 ] }
            collisionGroups={interactionGroups(1, [0, 1, 4])}
        >
            <Fish />
        </RigidBody>
    )
}

// import { useRapier, RigidBody } from '@react-three/rapier'
// import { useFrame } from '@react-three/fiber'
// import { useKeyboardControls } from '@react-three/drei'
// import { useState, useEffect, useRef } from 'react'
// import * as THREE from 'three'
// import useGame from '../store/useGame.jsx'
// import Fish from './Fish/FIsh.jsx'

// export default function Player()
// {
//     const body = useRef()
//     const [ subscribeKeys, getKeys ] = useKeyboardControls()
//     const { rapier, world } = useRapier()
//     const [ smoothedCameraPosition ] = useState(() => new THREE.Vector3(10, 10, 10))
//     const [ smoothedCameraTarget ] = useState(() => new THREE.Vector3())
//     const start = useGame((state) => state.start)
//     const end = useGame((state) => state.end)
//     const restart = useGame((state) => state.restart)
//     const blocksCount = useGame((state) => state.blocksCount)

//     const jump = () =>
//     {
//         const origin = body.current.translation()
//         origin.y -= 0.31
//         const direction = { x: 0, y: - 1, z: 0 }
//         const ray = new rapier.Ray(origin, direction)
//         const hit = world.castRay(ray, 10, true)

//         if(hit.timeOfImpact < 0.15)
//         {
//             body.current.applyImpulse({ x: 0, y: 0.5, z: 0 })
//         }
//     }
    
//     const reset = () =>
//     {
//         body.current.setTranslation({ x: 0, y: 1, z: 0 })
//         body.current.setLinvel({ x: 0, y: 0, z: 0 })
//         body.current.setAngvel({ x: 0, y: 0, z: 0 })
//     }

//     useEffect(() =>
//     {
//         const unsubscribeReset = useGame.subscribe(
//             (state) => state.phase,
//             (value) =>
//             {
//                 if(value === 'ready')
//                     reset()
//             }
//         )

//         const unsubscribeJump = subscribeKeys(
//             (state) => state.jump,
//             (value) =>
//             {
//                 if(value)
//                     jump()
//             }
//         )

//         const unsubscribeAny = subscribeKeys(
//             () =>
//             {
//                 start()
//             }
//         )

//         return () =>
//         {
//             unsubscribeReset()
//             unsubscribeJump()
//             unsubscribeAny()
//         }
//     }, [])

//     useFrame((state, delta) =>
//     {
//         /**
//          * Controls
//          */
//         const { forward, backward, leftward, rightward } = getKeys()

//         const impulse = { x: 0, y: 0, z: 0 }
//         const torque = { x: 0, y: 0, z: 0 }

//         const impulseStrength = 0.6 * delta
//         const torqueStrength = 0.2 * delta

//         if(forward)
//         {
//             impulse.z -= impulseStrength
//             torque.x -= torqueStrength
//         }

//         if(rightward)
//         {
//             impulse.x += impulseStrength
//             torque.z -= torqueStrength
//         }

//         if(backward)
//         {
//             impulse.z += impulseStrength
//             torque.x += torqueStrength
//         }
        
//         if(leftward)
//         {
//             impulse.x -= impulseStrength
//             torque.z += torqueStrength
//         }

//         body.current.applyImpulse(impulse)
//         body.current.applyTorqueImpulse(torque)

//         /**
//          * Camera
//          */
//         const bodyPosition = body.current.translation()
    
//         const cameraPosition = new THREE.Vector3()
//         cameraPosition.copy(bodyPosition)
//         cameraPosition.z += 2.25
//         cameraPosition.y += 0.65

//         const cameraTarget = new THREE.Vector3()
//         cameraTarget.copy(bodyPosition)
//         cameraTarget.y += 0.25

//         smoothedCameraPosition.lerp(cameraPosition, 5 * delta)
//         smoothedCameraTarget.lerp(cameraTarget, 5 * delta)

//         state.camera.position.copy(smoothedCameraPosition)
//         state.camera.lookAt(smoothedCameraTarget)

//         /**
//         * Phases
//         */
//         if(bodyPosition.z < - (blocksCount * 4 + 2))
//             end()

//         if(bodyPosition.y < - 4)
//             restart()
//     })

//     return <RigidBody
//         ref={ body }
//         canSleep={ false }
//         colliders="ball"
//         restitution={ 0.2 }
//         friction={ 1 } 
//         linearDamping={ 0.5 }
//         angularDamping={ 0.5 }
//         position={ [ 0, 1, 0 ] }
//     >
//         <Fish/>
//     </RigidBody>
// }