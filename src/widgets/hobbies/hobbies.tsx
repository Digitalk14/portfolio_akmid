import React from "react";
import { HobbiesModel, DescriptionBlock } from "~/shared";

const description = `My hobbies\n\nHiking\n\nBoard games\n\nWalking with my dog`;
const position = { x: 3, y: 0.5, z: 0 };

export const Hobbies = () => {
  return (
    <group position={[3, -0.45, -7]} rotation-y={Math.PI}>
      <HobbiesModel />
      <DescriptionBlock position={position} description={description} />
      <pointLight
        castShadow
        position={[3.6, 3, 5]}
        color={"#f5e8cc"}
        intensity={1.35}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-normalBias={0.07}
      />
    </group>
  );
};
