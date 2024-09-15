import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Cat = () => {
  const cat = useGLTF("./cat/Cat.glb");
  const { actions, names } = useAnimations(cat.animations, cat.scene);

  useEffect(() => {
    if (actions && names.length > 0) {
      const action = actions[names[0]];
      action?.reset().fadeIn(0.5).play();
    }
  }, [actions, names]);

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={cat.scene}
        scale={0.6}
        position={[0, -3.25, 0]}
        rotation={[0, 1, 0]}
      />
    </mesh>
  );
};

const CatCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Cat />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CatCanvas;
