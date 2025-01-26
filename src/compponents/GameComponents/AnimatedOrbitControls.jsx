import React, { useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function AnimatedOrbitControls() {
  const controlsRef = useRef();
  const { camera, gl } = useThree();

  useEffect(() => {
    camera.position.set(3, 3, 3);
    camera.lookAt(1, 2, 5);

    let clock = new THREE.Clock();
    let targetPosition = new THREE.Vector3(0, -2, 20);
    let initialPosition = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z);

    const animateCamera = () => {
      const delta = clock.getDelta();
      const currentPos = camera.position.clone().lerp(targetPosition, 0.01);
      camera.position.copy(currentPos);
      camera.lookAt(0, 0, 0);
      controlsRef.current.update();

      if (camera.position.distanceTo(targetPosition) < 0.1) {
        cancelAnimationFrame(animateCamera);
      } else {
        requestAnimationFrame(animateCamera);
      }
    };

    animateCamera();
  }, [camera]);

  return <OrbitControls ref={controlsRef} enableDamping dampingFactor={0.25} enableZoom={false} enableRotate={false} enablePan={false} minDistance={10}/>;
}
