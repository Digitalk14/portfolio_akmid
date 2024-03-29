import { Plane, useTexture } from "@react-three/drei";
import { assetPrefix } from "~/shared";

export const Photo = () => {
  const isGithubActions = process.env.GITHUB_ACTIONS || false;
  const textures = useTexture({
    map: `assets/images/covers/my_photo.jpg`,
  });
  return (
    <Plane
      receiveShadow
      castShadow
      rotation-y={1.9}
      rotation-x={1.8}
      rotation-z={-1.8}
      scale={[3, 3.9, 1]}
      position={[-4.6, 1.3, 2.3]}
    >
      <meshStandardMaterial
        {...textures}
        attach="material"
        color={0xffffff}
        transparent
      />
    </Plane>
  );
};
