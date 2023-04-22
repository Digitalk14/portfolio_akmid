import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useRef, useState } from "react";
import { useProgress, Html } from "@react-three/drei";
import { Object3D } from "three/src/core/Object3D";
import * as THREE from "three";
import { useControls } from "leva";

export const Photoframe = () => {
  const [model, setModel] = useState<Object3D | null>(null);
  const progress = useProgress();
  const modelRef = useRef<Object3D | null>(null);
  const { xframe, yframe, zframe, rotate } = useControls({
    xframe: { value: -4.7, min: -5, max: 5, step: 0.05 },
    yframe: { value: -1.05, min: -5, max: 5, step: 0.05 },
    zframe: { value: 2.4, min: -5, max: 5, step: 0.05 },
    rotate: { value: 0, min: -5, max: 5 },
  });
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("/assets/gltf-models/photoframe.glb", async (gltf) => {
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
        position={[xframe, yframe, zframe]}
        dispose={null}
      >
        <primitive ref={modelRef} castShadow object={model} dispose={null} />
      </group>
    );
  }
  return null
};
