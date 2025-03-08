"use client";

import { useState } from "react";
import {
  Networks,
  Nav,
  Scrollable,
  HeroContent,
  About,
  Experience,
  Projects,
} from "@/components/ui";
import { cursorLightBackground } from "@/components/utils";

export default function Home() {
  const scrollState = useState(0);
  cursorLightBackground();
  return (
    <div
      className="font-mono min-h-screen bg-[#dfdfdf] text-[#454f6e] relative before:absolute 
                    before:w-full before:h-full before:top-0 before:left-0
                    before:bg-[radial-gradient(900px_at_var(--cursor-x,0px)_var(--cursor-y,0px),rgba(100,255,218,0.06),transparent_40%)]
                    before:pointer-events-none"
    >
      <main className="flex flex-col md:flex-row gap-4 justify-between max-w-6xl mx-auto px-6 md:px-4">
        <div className="flex flex-col gap-2 w-full md:w-1/3">
          <HeroContent>
            <div className="flex flex-col gap-2">
              <p className="font-mono text-[#0d9272] mb-2 md:mb-5">
                Hi, my name is
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-[#112240] ">
                Dmitrii Vasilev
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold ">
                Frontend Engineer
              </h2>
              <p className="max-w-xl text-lg">
                I build exceptional digital experiences. Currently, I'm focused
                on building accessible, human-centered products.
              </p>
            </div>
            <Nav scrollState={scrollState} />
            <Networks />
          </HeroContent>
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <Scrollable scrollState={scrollState}>
            <About scrollState={scrollState} />
            <Experience scrollState={scrollState} />
            <Projects scrollState={scrollState} />
          </Scrollable>
        </div>
      </main>
    </div>
  );
}
