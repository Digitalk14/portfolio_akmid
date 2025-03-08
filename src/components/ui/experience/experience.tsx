import { useRef } from "react";
import { useEffect } from "react";
import { EXPERIENCE } from "./const";
import { useVisibilityObserver } from "@/components/utils";

export const Experience = ({
  scrollState,
}: {
  scrollState: [number, (value: number) => void];
}) => {
  const [scrollIndex, setScrollIndex] = scrollState;
  const ref = useRef<HTMLDivElement>(null);
  const result = useVisibilityObserver(ref);
  useEffect(() => {
    if (result && scrollIndex !== 1) {
      setScrollIndex(1);
    }
  }, [result, scrollIndex]);
  return (
    <div
      id="experience"
      className="flex flex-col gap-6 min-h-[100vh] scroll-mt-[100px]"
    >
      <p className="md:hidden text-xl font-bold text-[#0d9272]">Experience</p>
      <div ref={ref} className="hidden md:block h-[5px]"></div>
      {EXPERIENCE.map((experience) => (
        <div key={experience.company} className="flex flex-col md:flex-row justify-between gap-2 md:gap-4 hover:bg-[#a9a9a9] md:p-4 rounded-md transition-all duration-300">
          <div className="w-full md:w-1/4">
            <p>
              {experience.startDate} - {experience.endDate}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full md:w-3/4 mb-6 md:mb-0">
            <p className="text-[#0d9272] font-bold">
              {experience.company} - {experience.position}
            </p>
            <p>{experience.description}</p>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <div key={skill} className="text-[#0d9272] px-2 py-1 rounded-md bg-[#112240]">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
