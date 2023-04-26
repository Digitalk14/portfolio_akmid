import { RigidBody, RigidBodyAutoCollider } from "@react-three/rapier";
import * as THREE from "three";
import { Text3D } from "@react-three/drei";
import { assetPrefix } from "~/shared";

const fontURL = `assets/fonts/helvetiker_regular.typeface.json`;
const material = new THREE.MeshMatcapMaterial();

interface IRigidObjectProps {
  colliders?: RigidBodyAutoCollider;
  restitution: number;
  size: number;
  height: number;
  bevelOffset: number;
  position: {
    x: number;
    y: number;
    z: number;
  };
  color: string;
  text: string;
  friction?: number;
}

export const RigidObject: React.FC<IRigidObjectProps> = ({
  colliders,
  restitution,
  size,
  height,
  bevelOffset,
  position,
  color,
  text,
  friction,
}) => {
  return (
    <RigidBody
      colliders={colliders ?? "cuboid"}
      restitution={restitution}
      friction={friction ?? 0}
    >
      <Text3D
        material={material}
        font={fontURL}
        size={size} //размер в целом
        height={height} //толщина от края оси
        curveSegments={12} //полигональность
        bevelEnabled
        bevelThickness={0} //толщина от центра оси
        bevelSize={0.02} //толщина букв
        bevelOffset={bevelOffset} //глубина ?
        bevelSegments={5} //хз
        castShadow
        receiveShadow
        position={[position.x, position.y, position.z]}
      >
        {text}
        <meshStandardMaterial color={color} />
      </Text3D>
    </RigidBody>
  );
};
