import { Svg, Float } from "@react-three/drei";
import { ICONS } from "./stack-list";

const iconPath = "/assets/images/icons/svg-stack/";

export const TechStack = () => {
  return (
    <group position={[-5, 1.5, -5]} rotation-y={Math.PI / 0.67}>
      {ICONS.map(({ name, scale, position }) => {
        return (
          <Float key={name}>
            <Svg
              src={`${iconPath}${name}.svg`}
              scale={scale}
              position={[position.x, position.y, 0]}
            />
          </Float>
        );
      })}
    </group>
  );
};
