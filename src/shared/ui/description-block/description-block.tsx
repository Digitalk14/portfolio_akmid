import React from "react";
import { Text } from "@react-three/drei";
import { Vector3 } from "three";

interface IDescriptionBlockProps {
  description: string;
  position: { x: number; y: number; z: number };
}

export const DescriptionBlock: React.FC<IDescriptionBlockProps> = ({
  description,
  position,
}) => {
  return (
    <React.Suspense fallback={null}>
      <Text
        color={"#000000"}
        fontSize={0.1}
        maxWidth={2}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={"left"}
        anchorX="center"
        anchorY="middle"
        position={[position.x, position.y, position.z]}
      >
        {description}
      </Text>
    </React.Suspense>
  );
};
