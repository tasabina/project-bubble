import { CuboidCollider, interactionGroups, quat, RigidBody } from "@react-three/rapier";
import Fish from "./Fish/FIsh";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { Euler, MathUtils, Quaternion, Vector3 } from "three";
import { getDirection } from "three/tsl";
import { degToRad } from "three/src/math/MathUtils.js";

export default function Player()
{
    const [ subscribeKeys, getKeys ] = useKeyboardControls();

    const normalizeAngle = (angle) => {
        while (angle > Math.PI) angle -= 2 * Math.PI;
        while (angle < -Math.PI) angle += 2 * Math.PI;
        return angle;
    };
    
    const lerpAngle = (start, end, t) => {
        start = normalizeAngle(start);
        end = normalizeAngle(end);
        
        if (Math.abs(end - start) > Math.PI) {
            if (end > start) {
            start += 2 * Math.PI;
            } else {
            end += 2 * Math.PI;
            }
        }
        
        return normalizeAngle(start + (end - start) * t);
    };

    // function lerpAngle(current, target, alpha) {
    //     const diff = ((target - current + Math.PI) % (2 * Math.PI)) - Math.PI;
    //     return current + diff * alpha;
    // }

    const character  = useRef(null)
    const RB  = useRef(null)

    const characterRotationTarget = useRef(0);
    const rotationTarget = useRef(0);

    const maxX = 5;
    const minX = -5;
    const maxY = 5;
    const speed = { value: 0.8, min: 0.1, max: 4, step: 0.1 };

    const rotation_speed = {
        value: degToRad(0.5),
        min: degToRad(0.1),
        max: degToRad(5),
        step: degToRad(0.1),
    }

    useFrame((_, delta) => {
        if (RB.current) {
            const { forward, backward, leftward, rightward, move } = getKeys();
    
            const position = RB.current.translation();
            const velocity = RB.current.linvel();
    
            const movement = {
                x: 0,
                z: 0,
            };
    
            // Handle movement input
            if (rightward) {
                movement.z = 1; // Move right
                RB.current.setTranslation({ x: position.x + 0.1, y: position.y, z: position.z }, true);
            }
            if (leftward) {
                movement.z = -1; // Move left
                RB.current.setTranslation({ x: position.x - 0.1, y: position.y, z: position.z }, true);
            }
            if (forward) {
                // movement.x = -1; // Move forward
                RB.current.setTranslation({ x: position.x, y: position.y + 0.1, z: position.z }, true);
            }
            if (backward) {
                // movement.x = 1; // Move backward
                RB.current.setTranslation({ x: position.x, y: position.y - 0.1, z: position.z }, true);
            }

            // // Handle boundaries
            // if (position.x > maxX) {
            //     RB.current.setTranslation({ x: maxX, y: position.y, z: position.z }, true);
            // }
            // if (position.x < minX) {
            //     RB.current.setTranslation({ x: minX, y: position.y, z: position.z }, true);
            // }
            // if (position.y > maxY) {
            //     RB.current.setTranslation({ x: position.x, y: maxY, z: position.z }, true);
            // }
    
            // Calculate rotation target based on movement
            if (movement.x !== 0 || movement.z !== 0) {
                characterRotationTarget.current = Math.atan2(movement.x, movement.z);
    
                // Update linear velocity based on direction
                velocity.x = Math.sin(characterRotationTarget.current) * 2 * delta; // Speed factor: 2
                velocity.z = Math.cos(characterRotationTarget.current) * 2 * delta;
            } else {
                // Stop character movement when no input is given
                velocity.x = 0;
                velocity.z = 0;
            }
    
            // Smoothly rotate the character to the target rotation
            character.current.rotation.y = lerpAngle(
                character.current.rotation.y,
                characterRotationTarget.current,
                0.1 // Interpolation speed (adjust for smoothness)
            );
    
            // Update the character's velocity
            RB.current.setLinvel(velocity, true);
        }
    });
    

    // useFrame((_, delta) =>
    //     {
    //         if (RB.current) {
    //             const { forward, backward, leftward, rightward } = getKeys()

    //             const position = RB.current.translation();

    //             if (position.x > maxX) {
    //                 RB.current.setTranslation({ x: maxX, y: position.y, z: position.z }, true);
    //             }

    //             if (position.x < minX) {
    //                 RB.current.setTranslation({ x: minX, y: position.y, z: position.z }, true);
    //             }

    //             if (position.y > maxY) {
    //                 RB.current.setTranslation({ x: position.x, y: maxY, z: position.z }, true);
    //             }

    //             const velocity = RB.current.linvel();

    //             const movement = {
    //                 x: 0,
    //                 z: 0,
    //             }

    //             if(rightward) {
    //                 movement.x = 0.5;
    //             }

    //             if(leftward) {
    //                 movement.x = -0.5;
    //             }

    //             if (movement.x !== 0) {
    //                 rotationTarget.current += degToRad(0.5) * movement.x;
    //             }

    //             if (movement.x !== 0 || movement.z !== 0) {
    //                 characterRotationTarget.current = Math.atan2(movement.x, movement.z);

    //                 velocity.x =
    //                     Math.sin(rotationTarget.current + characterRotationTarget.current) *
    //                     1;
    //                 velocity.z =
    //                     Math.cos(rotationTarget.current + characterRotationTarget.current) *
    //                     1;
    //             }

    //             character.current.rotation.y = lerpAngle(
    //                 character.current.rotation.y,
    //                 characterRotationTarget.current,
    //                 0.5
    //             );
            
    //             RB.current.setLinvel(velocity, true);
    //         }

    //         // if (!playerRef.current) return;
    //         // const body = playerRef.current;

    //         // const { forward, backward, leftward, rightward } = getKeys()

    //         // const impulse = { x: 0, y: 0, z: 0 }
    //         // const torque = { x: 0, y: 0, z: 0 }
    //         // const impulseStrength = 50 * delta
    //         // const torqueStrength = 2 * delta



    //         // let rotationY = body.rotation.y;
    //         // let direction = 0
    //         // if(rightward) {
    //         //     rotationY = -Math.PI;
    //         //     direction = 0.5;

    //         //     impulse.x += impulseStrength
    //         //     torque.z -= torqueStrength
    //         // } else if (leftward) {
    //         //     rotationY = Math.PI;
    //         //     direction = -0.5;

    //         //     impulse.x -= impulseStrength
    //         //     torque.z += torqueStrength
    //         // } else {
    //         //     direction = 0;
    //         //     impulse.x = 0
    //         //     torque.z = 0
    //         // }
    
    //         // // Apply the new rotation
    //         // const newRotation = new Quaternion().setFromEuler(new Euler(0, rotationY, 0));
    //         // playerRef.current.setRotation(newRotation, true);

    //         // playerRef.current.applyImpulse(impulse)
    //         // playerRef.current.applyTorqueImpulse(torque)


    //         // if (playerRef.current) {
    //         //     const body = playerRef.current;
    //         //     const { forward, backward, leftward, rightward } = getKeys()

    //         //     const impulse = { x: 0, y: 0, z: 0 }
    //         //     const torque = { x: 0, y: 0, z: 0 }

    //         //     const impulseStrength = 0.6 * delta
    //         //     const torqueStrength = 0.2 * delta

    //         //     const quaternion = quat(body.rotation());

    //         //     if(leftward) {
    //         //         body.applyImpulse({ x: -speed, y: 0, z: 0 });
    //         //         if (!direction || direction && direction !== 'leftward') {
    //         //             const targetRotation = quat(new Euler(0, Math.PI, 0));
    //         //             body.rotation.y = targetRotation
    //         //             // body.setAngvel(targetRotation, false);
    //         //             setDirection('leftward')
    //         //         }
    //         //     } else if(rightward) {
    //         //         if (!direction || direction && direction !== 'rightward') {
    //         //             const targetRotation = new Euler(0, Math.PI, 0);
    //         //             body.rotation.y = targetRotation
    //         //             // body.setRotation({ w: 1.0, x: 0.0, y: -Math.PI, z: 0.0 }, true)
    //         //             // body.setAngvel(targetRotation, false);
    //         //             setDirection('rightward')
    //         //         }
    //         //         body.applyImpulse({ x: speed, y: 0, z: 0 });
    //         //     } else {
    //         //         body.setLinvel({ x: 0, y: 0, z: 0 });
    //         //         const targetRotation = new Euler(0, 0, 0);
    //         //         body.setAngvel(targetRotation, true);
    //         //     }

    //         //     // body.applyImpulse(impulse)
    //         //     // body.applyTorqueImpulse(torque)
    //         // }
    //     })

    return (
        <RigidBody colliders={false} lockRotations ref={RB}>
            <group ref={character}>
                <Fish />
            </group>
            <CuboidCollider position={[0, 0, 0]} args={[1 ,1 ,1]} name="Player"/>
        </RigidBody>
    )
}
