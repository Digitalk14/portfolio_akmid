import { Container, Section, PerspectiveCamera } from "~/shared";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Plane, OrbitControls, useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import { DirectionalLight, DirectionalLightHelper } from "three";

interface ICanvasContainerProps {
  children: React.ReactNode;
}

export const CanvasContainer: React.FC<ICanvasContainerProps> = ({
  children,
}) => {
  const { intensity, x, y, z } = useControls({
    intensity: { value: 2.5, min: 0, max: 5, step: 0.01 },
    x: { value: 6.9, min: -15, max: 15 },
    y: { value: 2.84, min: 0, max: 3 },
    z: { value: 3, min: -5, max: 5 },
  });
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
    <Section backgroundColor="#ededed">
      <Container maxWidth="100%">
        <Canvas shadows>
          <PerspectiveCamera />
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} rotateSpeed={0.5}/>
          <ambientLight intensity={0.6} />
          <directionalLight
            intensity={intensity}
            position={[x, y, z]}
            castShadow
            shadow-mapSize-height={2048}
            shadow-mapSize-width={2048}
            color={"#ffffff"}
            shadow-normalBias={0.07}
            ref={dirLightRef}
          />
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
