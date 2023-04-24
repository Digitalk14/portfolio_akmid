import React from "react";
import { HomeOfficeModel, DescriptionBlock } from "~/shared";

const description = `My experience\n\ninDrive – 2019-2023\nFrontend Engineer, Techical leader\n\nFreelance – 2018 - 2019`;
const position = { x: 3, y: 0.5, z: 0 };

export const HomeOffice = () => {
  return (
    <group position={[7, 0, 3]} rotation-y={Math.PI / 2} dispose={null}>
      <HomeOfficeModel />
      <DescriptionBlock position={position} description={description} />
      <pointLight
        shadow-normalBias={0.07}
        castShadow
        position={[-5, 3, 5]}
        color={"#f8ebd0"}
        intensity={0.4}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
      />
      <rectAreaLight
        castShadow
        position={[1.1, -0.9, -1.3]}
        color={"#ebddb2"}
        intensity={30}
        rotation-y={Math.PI}
        height={1}
        width={1}
      />
    </group>
  );
};
