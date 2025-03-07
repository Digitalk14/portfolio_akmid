import { useEffect, useRef } from "react";
import { useVisibilityObserver } from "@/components/utils";

export const About = ({
  scrollState,
}: {
  scrollState: [number, (value: number) => void];
}) => {
  const [scrollIndex, setScrollIndex] = scrollState;
  const ref = useRef<HTMLDivElement>(null);
  const result = useVisibilityObserver(ref);
  useEffect(() => {
    if (result && scrollIndex !== 0) {
      setScrollIndex(0);
    }
  }, [result, scrollIndex]);
  return (
    <div
      id="about"
      className="flex flex-col gap-4 min-h-[100vh] scroll-mt-[100px]"
    >
      <div ref={ref} className="h-[5px]"></div>
      <p className="flex flex-col gap-4">
        <span>
          I'm a Front-End Engineer with six years of experience specializing in
          building scalable web infrastructures and optimizing website
          performance. Passionate about web technologies, I enjoy crafting fast,
          accessible, and visually engaging user interfaces that balance design
          precision with engineering efficiency. My expertise spans modern
          JavaScript frameworks, performance optimization, and developer tooling,
          ensuring seamless digital experiences.
        </span>
        <span>
          Currently, I work at <b className="text-[#ccd6f6]">Rove Concepts</b>, where I contribute to enhancing
          real-time 3D rendering Pixel Streaming and Unreal Engine technology, building interactive showroom
          tools, and improving the overall user experience with ReactJS. Previously,
          I played a key role at <b className="text-[#ccd6f6]">inDrive</b>, where I developed and maintained
          multiple large-scale websites, enabling business expansion across 45
          countries. My career has also included impactful projects at <b className="text-[#ccd6f6]">Sametrica</b>
          and freelance work, allowing me to refine my skills in state management,
          architecture design, and accessibility best practices.
        </span>
        <span>
          Beyond coding, I enjoy experimenting with new programming paradigms,
          refining developer workflows, and working on side projects like <b className="text-[#ccd6f6]">NumDoku</b>,
          a logic-based web game. I'm always eager to collaborate on innovative
          solutions that push the boundaries of front-end development.
        </span>
      </p>
    </div>
  );
};
