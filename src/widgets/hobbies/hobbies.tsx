import { useControls } from "leva";
import React from "react";
import { Container, Section, HobbiesModel, DescriptionBlock } from "~/shared";

const description = `My hobbies\n\nHiking\n\nBoard games\n\nWalking with my dog`;
const position = { x: 3, y: 0.5, z: 0 };

export const Hobbies = () => {
  const { intensity, x, y, z, color } = useControls({
    intensity: { value: 1.35, min: 0, max: 50, step: 0.01 },
    color: { value: "#f5e8cc" },
    x: { value: 3.6, min: -5, max: 5, step: 0.1 },
    y: { value: 3, min: -5, max: 5, step: 0.1 },
    z: { value: 5, min: -5, max: 5, step: 0.1 },
  });
  return (
    <group position={[3, -0.45, -7]} rotation-y={Math.PI}>
      <HobbiesModel />
      <DescriptionBlock position={position} description={description} />
      <pointLight
        castShadow
        position={[x, y, z]}
        color={color}
        intensity={intensity}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-normalBias={0.07}
      />
    </group>
  );
};
