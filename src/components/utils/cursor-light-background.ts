"use client";

import { useEffect } from "react";

export const useCursorLightBackground = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty(
        "--cursor-x",
        `${e.clientX + window.scrollX}px`
      );
      document.documentElement.style.setProperty(
        "--cursor-y",
        `${e.clientY + window.scrollY}px`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
};
