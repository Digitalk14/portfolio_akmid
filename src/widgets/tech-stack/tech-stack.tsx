import { Svg, Float } from "@react-three/drei";
import { ICONS } from "./stack-list";
import { DescriptionBlock } from "~/shared";
import { useState } from "react";
import { assetPrefix } from "~/shared";

export const TechStack = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const handleHover = (i: number) => {
    setActiveIndex(i);
  };
  const path = `${assetPrefix()}/assets/images/icons/svg-stack/`
  return (
    <group position={[-5, 1.5, -5]} rotation-y={Math.PI / 0.67}>
      {ICONS.map(({ name, scale, position }, i) => {
        return (
          <Float key={name}>
            <Svg
              src={`${path}${name}.svg`}
              castShadow
              scale={i === activeIndex ? scale * 1.2 : scale}
              position={[position.x, position.y, i === activeIndex ? 1 : 0]}
            />
          </Float>
        );
      })}
      <group position={[4, -0.5, 0]}>
        {ICONS.map(({ name, descriptionPosition }, i) => {
          return (
            <DescriptionBlock
              key={name}
              position={descriptionPosition}
              description={name}
              onPointerOver={() => handleHover(i)}
            />
          );
        })}
      </group>
    </group>
  );
};
