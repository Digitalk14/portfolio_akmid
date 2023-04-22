import { Plane, useTexture } from "@react-three/drei";
import {
  LinearEncoding,
  Vector2,
} from "three";

export const PlaneGrass = () => {
  const terrainTextures = useTexture({
    map: "/assets/textures/grass/Grass001_1K_Color.jpg",
    displacementMap: "/assets/textures/grass/Grass001_1K_Displacement.jpg",
    aoMap: "/assets/textures/grass/Grass001_1K_AmbientOcclusion.jpg",
    roughnessMap: "/assets/textures/grass/Grass001_1K_Roughness.jpg",
    normalMap: "/assets/textures/grass/Grass001_1K_Normal.jpg",
  });
  //   const {
  //     displacementScale,
  //     aoMapIntensity,
  //     roughness,
  //     metalness,
  //     normalScale,
  //   } = useControls({
  //     displacementScale: {
  //       value: 1,
  //       min: -2,
  //       max: 2,
  //     },
  //     aoMapIntensity: {
  //       value: 1,
  //       min: 0,
  //       max: 10,
  //     },
  //     roughness: {
  //       value: 1,
  //       min: 0,
  //       max: 1,
  //     },
  //     metalness: {
  //       value: 0,
  //       min: 0,
  //       max: 1,
  //     },
  //     normalScale: [1, 1],
  //   });

  return (
    <Plane
      castShadow
      receiveShadow
      scale={3.8}
      rotation-x={-Math.PI / 2}
      // rotation-z={-0.3}
      position-y={-0.48}
      position-x={-0.5}
      position-z={-0.2}
    >
      <meshStandardMaterial
        {...terrainTextures}
        normalMap-encoding={LinearEncoding}
        transparent
        displacementScale={0}
        aoMapIntensity={0.7}
        roughness={1}
        metalness={0}
        metalnessMap={null}
        normalScale={new Vector2(1, 1)}
      />
    </Plane>
  );
};
