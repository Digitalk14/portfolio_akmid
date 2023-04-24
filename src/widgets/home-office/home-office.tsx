import React from "react";
import { HomeOfficeModel, DescriptionBlock } from "~/shared";

const description = `Lorem Ipsum\n Hello World`;
const position = { x: 3, y: 0, z: 0 };

export const HomeOffice = () => {
  return (
    <group position={[7, 0, 3]} rotation-y={Math.PI / 2} dispose={null}>
      <HomeOfficeModel />
      <DescriptionBlock position={position} description={description} />
    </group>
  );
};
