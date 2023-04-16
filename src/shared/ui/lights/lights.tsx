import { useEffect, useRef } from "react";
import { DirectionalLight } from "three";
import { PostProcess } from "../post-process";

export const Lights = () => {
  //   const { intensity, x, y, z, color } = useControls({
  //     intensity: { value: 1.5, min: 0, max: 5, step: 0.01 },
  //     x: { value: -3.6, min: -5, max: 5 },
  //     y: { value: 1.3, min: 0, max: 3 },
  //     z: { value: 1.1, min: 0, max: 3 },
  //     color: { value: "#ffe9c9" },
  //   });
  //   const { ambientLightIntensity, ambientLightColor } = useControls({
  //     ambientLightIntensity: { value: 0.15, min: 0, max: 5, step: 0.01 },
  //     ambientLightColor: { value: "#e6fffe" },
  //   });
  const directionalLightRef = useRef<DirectionalLight>(null!);
  //   useHelper(directionalLightRef, DirectionalLightHelper, 1, "red");
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
        intensity={0.8}
        ref={directionalLightRef}
        position={[-3.6, 1.3, 1.1]}
        castShadow
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
        color={"#ffe9c9"}
        shadow-normalBias={0.07}
      />
      <ambientLight intensity={0.15} color={"#e6fffe"} />
      <PostProcess />
      {/* <Plane
        castShadow
        receiveShadow
        scale={10}
        rotation-x={-Math.PI / 2}
        position-y={-1}
      >
        <meshBasicMaterial color="#fab608"/>
      </Plane> */}
    </>
  );
};
