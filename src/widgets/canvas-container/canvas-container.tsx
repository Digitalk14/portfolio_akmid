import { Container, Section, PerspectiveCamera } from "~/shared";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Plane, OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { DirectionalLight } from "three";

interface ICanvasContainerProps {
  children: React.ReactNode;
}

export const CanvasContainer: React.FC<ICanvasContainerProps> = ({
  children,
}) => {
  const dirLightRef = useRef<DirectionalLight>(null);
  const [rotationY, setRotation] = useState(0);
  useEffect(() => {
    const handleScroll = (e: any) => {
      if (e.deltaY >= 0) {
        if (rotationY === 3) {
          setRotation(0);
          return;
        } else {
          const currentIndex = rotationY + 1;
          setRotation(currentIndex);
          return;
        }
      } else {
        if (rotationY === 0) {
          setRotation(3);
          return;
        } else {
          const currentIndex = rotationY - 1;
          setRotation(currentIndex);
        }
      }
    };
    addEventListener("wheel", handleScroll);
    return () => {
      removeEventListener("wheel", handleScroll);
    };
  }, []);
  return (
    <Section backgroundColor="#827c71">
      <Container maxWidth="100%">
        <Canvas shadows>
          <PerspectiveCamera />
          <OrbitControls
            // enableZoom={false}
            maxPolarAngle={Math.PI / 2.2}
            rotateSpeed={0.5}
          />
          <ambientLight intensity={0.05} />
          <Physics>
            {children}
            <RigidBody type="fixed">
              <Plane
                receiveShadow
                castShadow
                rotation-x={-Math.PI / 2}
                scale={20}
                position-x={0}
                position-y={-1}
              >
                <meshStandardMaterial
                  attach="material"
                  color={0xffffff}
                  transparent
                />
              </Plane>
            </RigidBody>
          </Physics>
        </Canvas>
      </Container>
    </Section>
  );
};
