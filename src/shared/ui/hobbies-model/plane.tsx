import { Plane, useTexture } from "@react-three/drei";
import { LinearEncoding, Vector2 } from "three";
import { assetPrefix } from "~/shared";

export const PlaneGrass = () => {
  const terrainTextures = useTexture({
    map: `${assetPrefix()}/assets/textures/grass/Grass001_1K_Color.jpg`,
    displacementMap: `${assetPrefix()}/assets/textures/grass/Grass001_1K_Displacement.jpg`,
    aoMap: `${assetPrefix()}/assets/textures/grass/Grass001_1K_AmbientOcclusion.jpg`,
    roughnessMap: `${assetPrefix()}/assets/textures/grass/Grass001_1K_Roughness.jpg`,
    normalMap: `${assetPrefix()}/assets/textures/grass/Grass001_1K_Normal.jpg`,
  });
  return (
    <Plane
      castShadow
      receiveShadow
      scale={3.8}
      rotation-x={-Math.PI / 2}
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
        roughness={0}
        metalness={0}
        metalnessMap={null}
        normalScale={new Vector2(1, 1)}
      />
    </Plane>
  );
};
