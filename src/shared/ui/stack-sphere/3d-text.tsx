import { Center } from "@react-three/drei";
import { RigidObject } from "./rigid-object";

export const StackSphere = () => {
  return (
    <>
      <Center position={[-1.5, 0, 0]}>
        <RigidObject
          colliders="hull"
          restitution={0.3}
          size={0.3}
          height={0.2}
          bevelOffset={-0.02}
          position={{ x: 0, y: 1.5, z: 0 }}
          color="#026783"
          text="Frontend"
          friction={0.7}
        />
        <RigidObject
          colliders="hull"
          restitution={0.1}
          size={0.3}
          height={0.2}
          bevelOffset={-0.02}
          position={{ x: 2, y: 1.5, z: 0 }}
          color="#026783"
          text="Engineer"
          friction={0.7}
        />
        <RigidObject
          restitution={0}
          size={0.75}
          height={0.2}
          bevelOffset={0}
          position={{ x: 0, y: 0.6, z: 0 }}
          color="#2fa1d1"
          text="DMITRII"
          friction={0.2}
        />
        <RigidObject
          colliders="hull"
          restitution={0.1}
          size={0.75}
          height={0.2}
          bevelOffset={0}
          position={{ x: 0, y: -0.1, z: 0 }}
          color="#2fa1d1"
          text="VASILEV"
        />
        {/* <RigidBody type="fixed">
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
        </RigidBody> */}
      </Center>
    </>
  );
};
