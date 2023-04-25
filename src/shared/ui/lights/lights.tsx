import { useEffect, useRef } from "react";
import { DirectionalLight } from "three";
import { PostProcess } from "../post-process";

interface ILightsProps {
  directionalLightIntensity: number;
  ambientLightIntensityProps: number;
  directionalLightPostition: [x: number, y: number, z: number];
}

export const Lights: React.FC<ILightsProps> = ({
  directionalLightIntensity,
  ambientLightIntensityProps,
  directionalLightPostition,
}) => {
  const directionalLightRef = useRef<DirectionalLight>(null!);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const xPos = e.clientX / window.innerWidth;
      const zPos = xPos * 3;
      const yPos = (1 - e.clientY / window.innerHeight) * 3;
      directionalLightRef.current.position.z = zPos;
      directionalLightRef.current.position.y = yPos;
    };
    addEventListener("mousemove", handleMouseMove);
    return () => {
      removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <directionalLight
        intensity={directionalLightIntensity}
        ref={directionalLightRef}
        position={directionalLightPostition}
        castShadow
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
        color="#ffe9c9"
        shadow-normalBias={0.07}
      />
      <ambientLight intensity={ambientLightIntensityProps} color="#e6fffe" />
      <PostProcess />
    </>
  );
};
