import { PerspectiveCamera as DreiCamera } from "@react-three/drei";
import { useState } from "react";
import { CAMERA_POSITIONS } from "./camera-positions";

export const PerspectiveCamera = () => {
  const [cameraPositionIndex, setCameraPositionIndex] = useState(0);
  return (
    <DreiCamera
      fov={60}
      near={0.1}
      far={300}
      position={[
        CAMERA_POSITIONS[cameraPositionIndex].x,
        CAMERA_POSITIONS[cameraPositionIndex].y,
        CAMERA_POSITIONS[cameraPositionIndex].z,
      ]}
      makeDefault
    />
  );
};
