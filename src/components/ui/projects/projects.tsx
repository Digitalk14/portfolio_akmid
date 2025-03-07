import { useEffect, useRef } from "react";
import { useVisibilityObserver } from "@/components/utils";
import { PROJECTS } from "./const";
import Image from "next/image";

export const Projects = ({
  scrollState,
}: {
  scrollState: [number, (value: number) => void];
}) => {
  const [scrollIndex, setScrollIndex] = scrollState;
  const ref = useRef<HTMLDivElement>(null);
  const result = useVisibilityObserver(ref);
  useEffect(() => {
    if (result && scrollIndex !== 2) {
      setScrollIndex(2);
    }
  }, [result, scrollIndex]);
  return (
    <div
      id="projects"
      className="flex flex-col gap-4 min-h-[100vh] scroll-mt-[100px]"
    >
      {PROJECTS.map(({ title, description, img, link }) => (
        <a
          key={title}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex  gap-4 p-4 rounded-md hover:bg-[#112240] transition-all duration-300"
        >
          <div className="w-1/4">
            <Image
              src={`/projects/${img}`}
              alt={title}
              width={120}
              height={100}
            />
          </div>
          <div className="flex flex-col gap-2 w-3/4">
            <h3 className="text-[#ccd6f6] font-bold">{title}</h3>
            <p>{description}</p>
          </div>
        </a>
      ))}
      <div ref={ref} className="h-[5px]"></div>
    </div>
  );
};
