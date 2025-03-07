import React, { useRef, useEffect } from "react";

export const Scrollable = ({
  children,
  scrollState,
}: {
  children: React.ReactNode;
  scrollState: [number, (value: number) => void];
}) => {
  const [scrollIndex, setScrollIndex] = scrollState;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const children = containerRef.current.children;
      if (scrollIndex >= 0 && scrollIndex < children.length) {
        const targetChild = children[scrollIndex];
        targetChild.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [scrollIndex]);

  return (
    <div ref={containerRef} className="flex flex-col gap-[100px] pt-32">
      {children}
    </div>
  );
};
