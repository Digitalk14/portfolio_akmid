import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useRef, useState } from "react";
import { useProgress, Html } from "@react-three/drei";
import { Object3D } from "three/src/core/Object3D";
import * as THREE from "three";
import { assetPrefix } from "~/shared";

export const Photoframe = () => {
  const [model, setModel] = useState<Object3D | null>(null);
  const progress = useProgress();
  const modelRef = useRef<Object3D | null>(null);
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(`assets/gltf-models/photoframe.glb`, async (gltf) => {
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
      modelObj.scale.set(8, 8, 8);
      modelObj.position.set(0, 0, 0);
      modelObj.rotation.set(0, -0.1, 0);
      setModel(modelObj);
    });
  }, []);
  if (model) {
    return (
      <group
        position={[-4.7, -1.05, 2.4]}
        dispose={null}
        castShadow
      >
        <primitive ref={modelRef} castShadow object={model} dispose={null} />
      </group>
    );
  }
  return null
};
