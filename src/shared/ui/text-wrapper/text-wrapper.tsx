import React from "react";
import { Wrapper } from "./text-wrapper.style";

interface ITextWrapperProps {
  children: React.ReactNode;
}

export const TextWrapper: React.FC<ITextWrapperProps> = ({ children }) => {
  return (
    <Wrapper>
      <p>{children}</p>
    </Wrapper>
  );
};
