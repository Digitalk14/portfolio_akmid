import React from "react";
import { MainWrapper } from "./main.style";

interface MainProps {
  children: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};