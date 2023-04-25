import * as THREE from "three";
import { useProgress } from "@react-three/drei";
import { Object3D } from "three/src/core/Object3D";
import { useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PlaneGrass } from "./plane";
import { assetPrefix } from "~/shared";

export const HobbiesModel = () => {
  const progress = useProgress();
  const [model, setModel] = useState<Object3D | null>(null);
  const modelRef = useRef<Object3D | null>(null);
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(`${assetPrefix()}/assets/gltf-models/hobbies.glb`, async (gltf) => {
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
      modelObj.scale.set(0.8, 0.8, 0.8);
      modelObj.position.set(0, -1, 0);
      setModel(modelObj);
    });
  }, []);
  if (model) {
    return (
      <>
        <primitive ref={modelRef} castShadow object={model} dispose={null} />
        <PlaneGrass />
      </>
    );
  }
  return null;
  // return (
  //   <>
  //     {model ? (
  //       <group dispose={null}>
  //         <primitive ref={modelRef} castShadow object={model} dispose={null} />
  //         <PlaneGrass />
  //       </group>
  //     ) : (
  //       <Html>{`${progress} %`}</Html>
  //     )}
  //     <PlaneGrass />
  //     {/* <Lights
  //       ambientLightIntensityProps={0.56}
  //       directionalLightIntensity={1.48}
  //       directionalLightPostition={[-1.2, 2.4, 0.62]}
  //     /> */}
  //   </>
  // );
};
