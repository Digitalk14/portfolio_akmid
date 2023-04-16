import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import {
  OrbitControls,
  useProgress,
  Html,
  Plane,
  useHelper,
  Effects as EffectsComposer,
} from "@react-three/drei";
import { Canvas, useLoader, extend, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { Object3D } from "three/src/core/Object3D"; //Object3D types
import { useControls } from "leva";
import { DirectionalLight, DirectionalLightHelper } from "three";
import { PostProcess } from "../post-process";

const LightScene = () => {
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

export const HomeOfficeModel = () => {
  const progress = useProgress();
  const [model, setModel] = useState<Object3D | null>(null);
  const modelRef = useRef<Object3D | null>(null);
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("/assets/gltf-models/platform2.glb", async (gltf) => {
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      const modelObj = gltf.scene;
      modelObj.children.forEach((mesh) => {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      });
      modelObj.scale.set(0.6, 0.6, 0.6);
      modelObj.position.set(0, -1, 0);
      setModel(modelObj);
    });
  }, []);
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const xPos = (e.clientX / window.innerWidth / 10) * -1;
      const yPos = (1 - e.clientY / window.innerHeight) * 3;
      if (modelRef) {
        modelRef.current?.rotation.set(0, xPos, 0);
      }
    };
    addEventListener("mousemove", handleMouseMove);
    return () => {
      removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <Canvas
      shadows
      camera={{ fov: 35, near: 1, far: 100, position: [6, 6, 10] }}
    >
      <camera />
      {model ? (
        <group dispose={null}>
          <primitive ref={modelRef} castShadow object={model} dispose={null} />
        </group>
      ) : (
        <Html>{`${progress} %`}</Html>
      )}
      <LightScene />
    </Canvas>
  );
};
