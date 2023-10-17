import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import Model from "./Model";

const Earth = () => {
  return (
    <Canvas camera={{ position: [5, 0, 0], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <Model position={[0, 0.25, 0]} />
      <Environment preset="city" />
      <ContactShadows
        frames={1}
        scale={5}
        position={[0, -1, 0]}
        far={1}
        blur={5}
        opacity={0.5}
        color="#204080"
      />
      <OrbitControls
        autoRotate
        minDistance={5}
        minPolarAngle={Math.PI * 0.35}
        maxPolarAngle={Math.PI * 0.55}
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
        maxDistance={6}
      />
    </Canvas>
  );
};
export default Earth;
