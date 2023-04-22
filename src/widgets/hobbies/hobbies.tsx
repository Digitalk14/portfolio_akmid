import React from "react";
import { Container, Section, HobbiesModel, DescriptionBlock } from "~/shared";

const description = `Lorem Ipsum\n Hello World`;
const position = { x: 3, y: 0, z: 0 };

export const Hobbies = () => {
  return (
    <group position={[3, -0.45, -7]} rotation-y={Math.PI}>
      <HobbiesModel />
      <DescriptionBlock position={position} description={description} />
    </group>
  );
};
