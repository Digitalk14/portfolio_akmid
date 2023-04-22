import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useProgress, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Object3D } from "three/src/core/Object3D"; //Object3D types
import { Lights } from "../lights";

export const HomeOfficeModel = () => {
  const progress = useProgress();
  const [model, setModel] = useState<Object3D | null>(null);
  const modelRef = useRef<Object3D | null>(null);
  useEffect(() => {
    //download model
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
  // useEffect(() => {
  //   //check mouse move
  //   const handleMouseMove = (e: any) => {
  //     const xPos = (e.clientX / window.innerWidth / 10) * -1;
  //     if (modelRef) {
  //       modelRef.current?.rotation.set(0, xPos, 0);
  //     }
  //   };
  //   addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);
  if(model){
    return (
      <primitive ref={modelRef} castShadow object={model} dispose={null} />
    )
  }
  return null
  // return (
  //   <>
  //     {model ? (
  //       <group dispose={null}>
  //         <primitive ref={modelRef} castShadow object={model} dispose={null} />
  //       </group>
  //     ) : (
  //       <Html>{`${progress} %`}</Html>
  //     )}
  //     {/* <Lights
  //       ambientLightIntensityProps={0.15}
  //       directionalLightIntensity={0.8}
  //       directionalLightPostition={[-3.6, 1.3, 1.1]}
  //     /> */}
  //   </>
  // );
};
