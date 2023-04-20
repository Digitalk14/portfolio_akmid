import { styled } from "@linaria/react";

interface ISectionProps {
  backgroundColor?: string;
}

export const Section = styled.section<ISectionProps>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  background: ${({ backgroundColor }) => backgroundColor ?? "black"};
  height: 100vh;
`;

interface IContainer {
  maxWidth?: string;
}
export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth ?? "480px"};
  height: 100vh;
`;
