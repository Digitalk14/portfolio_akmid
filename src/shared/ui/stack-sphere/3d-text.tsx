import { useRef } from "react";
import { RigidBody, Physics, Debug } from "@react-three/rapier";
import { Canvas, extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import {
  Center,
  OrbitControls,
  Plane,
  Text3D,
  useHelper,
  useTexture,
} from "@react-three/drei";
import { DirectionalLight, DirectionalLightHelper, Object3D } from "three";
import * as THREE from "three";
import { useControls } from "leva";
import { RigidObject } from "./rigid-object";

const material = new THREE.MeshMatcapMaterial();

export const StackSphere = () => {
  const textOptions = {
    size: 5,
    height: 1,
  };
  const { intensity, x, y, z } = useControls({
    intensity: { value: 2.5, min: 0, max: 5, step: 0.01 },
    x: { value: -1.5, min: -15, max: 15 },
    y: { value: 2, min: 0, max: 3 },
    z: { value: 3, min: -5, max: 5 },
  });
  const {
    size,
    height,
    curveSegments,
    bevelThickness,
    bevelSize,
    bevelOffset,
    bevelSegments,
    positionY,
    color,
  } = useControls({
    size: { value: 0.36, min: 0, max: 1 },
    height: { value: 0.2, min: 0, max: 1 },
    curveSegments: { value: 12, min: 0, max: 20 },
    bevelThickness: { value: 0, min: 0, max: 1 },
    bevelSize: { value: 0.02, min: 0, max: 1 },
    bevelOffset: { value: -0.02, min: -1, max: 1 },
    bevelSegments: { value: 5, min: 0, max: 10 },
    positionY: { value: 1.3, min: -5, max: 5, step: 0.01 },
    color: { value: "#026783" },
  });
  const fontURL = "./assets/fonts/helvetiker_regular.typeface.json";
  const dirLightRef = useRef<DirectionalLight>(null);
  useHelper(dirLightRef, DirectionalLightHelper, 1, "red");
  return (
    <Physics>
      <Debug />

      <OrbitControls />
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
      <Center>
        <RigidObject
          colliders="hull"
          restitution={0.5}
          size={0.36}
          height={0.2}
          bevelOffset={-0.02}
          position={{ x: 0, y: 1.3, z: 0 }}
          color='#026783'
          text='Frontend'
        />
        <RigidObject
          colliders="hull"
          restitution={0.1}
          size={0.36}
          height={0.2}
          bevelOffset={-0.02}
          position={{ x: 2, y: 1.3, z: 0 }}
          color='#026783'
          text='Engineer'
          friction={0.7}
        />
        <RigidObject
          restitution={0.5}
          size={0.75}
          height={0.2}
          bevelOffset={0}
          position={{ x: 0, y: 0.2, z: 0 }}
          color='#2fa1d1'
          text='DMITRII'
        />
        <RigidObject
          restitution={0.5}
          size={0.75}
          height={0.2}
          bevelOffset={0}
          position={{ x: 4, y: 0.4, z: 0.3 }}
          color='#2fa1d1'
          text='VASILEV'
        />
        <RigidBody type="fixed">
          <Plane
            receiveShadow
            castShadow
            rotation-x={-Math.PI / 2}
            scale={30}
            position-x={2.5}
          >
            <meshStandardMaterial
              attach="material"
              color={0xffffff}
              transparent
            />
          </Plane>
        </RigidBody>
      </Center>
    </Physics>
  );
};
