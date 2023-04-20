import { Container, Section, StackSphere } from "~/shared";
import { Canvas } from "@react-three/fiber";

export const StackWebGL = () => {
  return (
    <Section backgroundColor="#f2f2f2">
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
        </Canvas>
      </Container>
    </Section>
  );
};
