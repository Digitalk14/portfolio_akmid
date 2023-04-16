import { extend, useThree } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";
import { Effects } from "@react-three/drei";
import { UnrealBloomPass } from "three-stdlib";

extend({ UnrealBloomPass });

export const PostProcess = () => {
  const { size, scene, camera } = useThree();
  const aspect = useMemo(() => {
    return new THREE.Vector2(size.width, size.height);
  }, [size]);

  return (
    <Effects
      multisamping={8}
      renderIndex={1}
      disableGamma
      disableRenderPass
    >
      {/* @ts-ignore */}
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      {/* @ts-ignore */}
      <unrealBloomPass attachArray="passes" args={[aspect, 0.4, 1, 0]} />
    </Effects>
  );
};
