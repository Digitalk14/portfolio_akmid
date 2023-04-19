import { useControls } from "leva";
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
  // const { intensity, x, y, z, color } = useControls({
  //   intensity: { value: 1.2, min: 0, max: 5, step: 0.01 },
  //   x: { value: -3.6, min: -5, max: 5 },
  //   y: { value: 1.3, min: 0, max: 3 },
  //   z: { value: 1.1, min: 0, max: 3 },
  //   color: { value: "#ffe9c9" },
  // });
  // const { ambientLightIntensity, ambientLightColor } = useControls({
  //   ambientLightIntensity: { value: 0.36, min: 0, max: 5, step: 0.01 },
  //   ambientLightColor: { value: "#e6fffe" },
  // });
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
