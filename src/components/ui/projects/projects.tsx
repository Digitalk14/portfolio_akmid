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
      <p className="md:hidden mb-4 text-xl font-bold text-[#0d9272]">
        Projects
      </p>
      {PROJECTS.map(({ title, description, img, link }) => {
        const imagePath = `/portfolio_akmid/projects/${img}.jpg`;
        return (
          <a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col-reverse md:flex-row gap-0 mb-6 md:mb-0 md:gap-4 md:p-4 rounded-md hover:bg-[#a9a9a9] transition-all duration-300"
          >
            <div className="w-full md:w-1/4">
              <Image
                src={imagePath}
                alt={title}
                width={120}
                height={100}
                className="w-1/2 md:w-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 w-full mb-4 md:mb-0 md:w-3/4">
              <h3 className="text-[#0d9272] font-bold">{title}</h3>
              <p>{description}</p>
            </div>
          </a>
        );
      })}
      <div ref={ref} className="h-[5px]"></div>
    </div>
  );
};
