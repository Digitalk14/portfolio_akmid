import { StackSphere, Photoframe, Photo, DescriptionBlock } from "~/shared";

const description = `Lorem Ipsum\n Hello World`;
const position = { x: 2, y: 0, z: 0 };

export const FirstScreen = () => {
  return (
    <group position={[1, 0, 5]}>
      <StackSphere />
      <Photoframe />
      <Photo />
      <DescriptionBlock position={position} description={description} />
    </group>
  );
};
