import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { FaMapMarkerAlt } from "react-icons/fa";
import Marker from "./Marker"
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
      </mesh>
    </group>
  );
};

export default Model;
