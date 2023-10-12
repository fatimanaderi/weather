import * as THREE from "three";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import { FaMapMarkerAlt } from "react-icons/fa";

const Model = (props) => {
  const { nodes, materials } = useGLTF("/earth.gltf");
  return (
    <group rotation={[-Math.PI / 2, 0, Math.PI]} {...props} dispose={null}>
      <mesh
        geometry={nodes["URF-Height_Lampd_Ice_0"].geometry}
        material={materials.Lampd_Ice}
      />
      <mesh
        geometry={nodes["URF-Height_watr_0"].geometry}
        material={materials.watr}
        material-roughness={0}
      />
      <mesh
        geometry={nodes["URF-Height_Lampd_0"].geometry}
        material={materials.Lampd}
        material-color="lightgreen"
      >
        <Marker rotation={[0, Math.PI / 2, 0]} position={[0, 1.3, 0]}>
          <FaMapMarkerAlt style={{ color: "orange" }} />
        </Marker>
        <group position={[0, 0, 1.3]} rotation={[0, 0, Math.PI]}>
          <Marker rotation={[0, Math.PI / 2, Math.PI / 2]}>
            <div
              style={{
                position: "absolute",
                fontSize: 10,
                letterSpacing: -0.5,
                left: 17.5,
              }}
            >
              north
            </div>
            <FaMapMarkerAlt style={{ color: "indianred" }} />
          </Marker>
        </group>
      </mesh>
    </group>
  );
};

const Marker=({ children, ...props })=> {
  const ref = useRef();
  const [isOccluded, setOccluded] = useState();
  const [isInRange, setInRange] = useState();
  const isVisible = isInRange && !isOccluded;
  const vec = new THREE.Vector3();
  useFrame((state) => {
    const range =
      state.camera.position.distanceTo(ref.current.getWorldPosition(vec)) <= 10;
    if (range !== isInRange) setInRange(range);
  });
  return (
    <group ref={ref}>
      <Html
        transform
        occlude
        onOcclude={setOccluded}
        style={{
          transition: "all 0.2s",
          opacity: isVisible ? 1 : 0,
          transform: `scale(${isVisible ? 1 : 0.25})`,
        }}
        {...props}
      >
        {children}
      </Html>
    </group>
  );
}
export default Model;
