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
      <div ref={ref} className="h-[5px]"></div>
      {EXPERIENCE.map((experience) => (
        <div key={experience.company} className="flex justify-between gap-4 hover:bg-[#112240] p-4 rounded-md transition-all duration-300">
          <div className="w-1/4">
            <p>
              {experience.startDate} - {experience.endDate}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-3/4">
            <p className="text-[#ccd6f6] font-bold">
              {experience.company} - {experience.position}
            </p>
            <p>{experience.description}</p>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <div key={skill} className="text-[#ccd6f6] px-2 py-1 rounded-md bg-[#112240]">
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
