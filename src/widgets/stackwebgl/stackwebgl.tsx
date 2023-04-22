import { Container, Section, StackSphere, Photoframe, Photo } from "~/shared";
import { Canvas } from "@react-three/fiber";

export const StackWebGL = () => {
  return (
    <Section backgroundColor="#e9e9e9">
      <Container maxWidth="100%">
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [3, 2, 10],
          }}
        >
            <StackSphere />
            <Photoframe />
            <Photo />
        </Canvas>
      </Container>
    </Section>
  );
};
