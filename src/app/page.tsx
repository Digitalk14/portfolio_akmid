"use client";
import { Networks, Nav } from "@/components/ui";
import { cursorLightBackground } from "@/components/utils";

export default function Home() {
  cursorLightBackground();

  return (
    <div
      className="min-h-screen bg-[#0a192f] text-[#8892b0] relative before:absolute 
                    before:w-full before:h-full before:top-0 before:left-0
                    before:bg-[radial-gradient(600px_at_var(--cursor-x,0px)_var(--cursor-y,0px),rgba(100,255,218,0.06),transparent_40%)]
                    before:pointer-events-none"
    >
      <main className="px-8 pt-32 max-w-6xl mx-auto">
        <p className="font-mono text-[#64ffda] mb-5">Hi, my name is</p>
        <h1 className="text-7xl font-bold text-[#ccd6f6] mb-4">
          Dmitrii Vasilev.
        </h1>
        <h2 className="text-3xl font-bold mb-6">Frontend Engineer.</h2>
        <p className="max-w-xl text-lg mb-12">
          I'm a frontend engineer specializing in building exceptional digital
          experiences. Currently, I'm focused on building accessible,
          human-centered products.
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-4 border border-[#64ffda] text-[#64ffda] 
                     font-mono rounded hover:bg-[#64ffda]/10 transition-colors"
        >
          Check out my work!
        </a>

        <Nav />
        <Networks />
      </main>
    </div>
  );
}
