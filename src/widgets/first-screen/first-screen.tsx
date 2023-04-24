import { StackSphere, Photoframe, Photo, DescriptionBlock } from "~/shared";

const description = `Hi, I’m Dmitrii and I create user interfaces for more than 5 years.\n\nI enjoy my job and infinitely improve my skills.\n\nActually, that’s why I chose this profession, cause there are lot of things to learn about`;
const position = { x: 2, y: 0.7, z: 0 };

export const FirstScreen = () => {
  return (
    <group position={[1, 0, 5]}>
      <StackSphere />
      <Photoframe />
      <Photo />
      <DescriptionBlock position={position} description={description} />
      <spotLight
        intensity={1.5}
        position={[8, 0, 2.5]}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        color={`#f9fffe`}
        shadow-normalBias={0.07}
        angle={1}
        penumbra={1}
        // ref={dirLightRef}
        target-position={[-8, 0, 5]}
      />
    </group>
  );
};
