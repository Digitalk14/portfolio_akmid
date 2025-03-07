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
      className="min-h-screen bg-[#0a192f] text-[#8892b0] relative before:absolute 
                    before:w-full before:h-full before:top-0 before:left-0
                    before:bg-[radial-gradient(900px_at_var(--cursor-x,0px)_var(--cursor-y,0px),rgba(100,255,218,0.06),transparent_40%)]
                    before:pointer-events-none"
    >
      <main className="flex gap-4 justify-between  max-w-6xl mx-auto">
        <div className="flex flex-col gap-2 w-1/3">
          <HeroContent>
            <div className="flex flex-col gap-2">
              <p className="font-mono text-[#64ffda] mb-5">Hi, my name is</p>
              <h1 className="text-5xl font-bold text-[#ccd6f6] ">
                Dmitrii Vasilev
              </h1>
              <h2 className="text-3xl font-bold ">Frontend Engineer</h2>
              <p className="max-w-xl text-lg">
                I build exceptional digital experiences. Currently, I'm focused
                on building accessible, human-centered products.
              </p>
            </div>
            <Nav scrollState={scrollState} />
            <Networks />
          </HeroContent>
        </div>

        <div className="flex flex-col w-1/2">
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
