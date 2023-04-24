import React from "react";
import { Text } from "@react-three/drei";
import { Vector3 } from "three";

interface IDescriptionBlockProps {
  description: string;
  position: { x: number; y: number; z: number };
  onPointerOver?: () => void;
}

export const DescriptionBlock: React.FC<IDescriptionBlockProps> = ({
  description,
  position,
  onPointerOver,
}) => {
  return (
    <React.Suspense fallback={null}>
      <Text
        color={"#000000"}
        fontSize={0.2}
        maxWidth={2}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={"left"}
        anchorX="center"
        anchorY="middle"
        position={[position.x, position.y, position.z]}
        onPointerEnter={onPointerOver}
      >
        {description}
      </Text>
    </React.Suspense>
  );
};
