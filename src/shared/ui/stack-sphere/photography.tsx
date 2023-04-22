import { Plane, useTexture } from "@react-three/drei";
import { useControls } from "leva";

export const Photo = () => {
  const textures = useTexture({
    map: "/assets/images/covers/main2.jpeg",
  });
  const { scalePhoto, xPhoto, yPhoto, zPhoto, rotationX, rotationY, rotationZ } = useControls({
    scalePhoto: { value: 3.9, min: 0, max: 10 },
    xPhoto: { value: -4.6, min: -10, max: 10 },
    yPhoto: { value: 1.6, min: 0, max: 10 },
    zPhoto: { value: 2.2, min: 0, max: 10 },
    rotationX: { value: 1.8, min: 0, max: 5 },
    rotationY: { value: 1.9, min: 0, max: 5 },
    rotationZ: { value: -1.8, min: -5, max: 5 },
  });
  return (
    <Plane
      receiveShadow
      castShadow
      rotation-y={rotationY}
      rotation-x={rotationX}
      rotation-z={rotationZ}
      scale={scalePhoto}
      position={[xPhoto, yPhoto, zPhoto]}
    >
      <meshBasicMaterial
        {...textures}
        attach="material"
        color={0xffffff}
        transparent
      />
    </Plane>
  );
};
