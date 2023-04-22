import { Container, Section } from "~/shared";
import { Canvas } from "@react-three/fiber";

interface ICanvasContainerProps {
  children: React.ReactNode;
}

export const CanvasContainer: React.FC<ICanvasContainerProps> = ({ children }) => {
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
          {children}
        </Canvas>
      </Container>
    </Section>
  );
};
