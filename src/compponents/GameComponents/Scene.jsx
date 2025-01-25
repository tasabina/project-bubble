import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import { KeyboardControls } from '@react-three/drei';
import GameUI from './UIComponents/GameUI';

export function Scene() {
  return (
    <KeyboardControls
      map={[
        { name: 'forward', keys: [ 'ArrowUp', 'KeyW' ] },
        { name: 'backward', keys: [ 'ArrowDown', 'KeyS' ] },
        { name: 'leftward', keys: [ 'ArrowLeft', 'KeyA' ] },
        { name: 'rightward', keys: [ 'ArrowRight', 'KeyD' ] },
        { name: 'jump', keys: [ 'Space' ] },
      ]}
    >
    <GameUI/>
      <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 0, -2, 20]
        } }
      >
          <Experience/>
      </Canvas>
    </KeyboardControls>
  );
}
