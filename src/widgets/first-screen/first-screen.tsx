import { StackSphere, Photoframe, Photo } from "~/shared";

export const FirstScreen = () => {
  return (
    <group position={[-3, 0, 5]}>
      <StackSphere />
      <Photoframe />
      <Photo />
    </group>
  );
};
