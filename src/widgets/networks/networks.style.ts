import { styled } from "@linaria/react";

interface IContentProps {
  isBottom: boolean;
}

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  min-height: 50px;
  margin: 40px 0;
  a {
    margin: 0 15px 0 0;
  }
  @media (max-width: 960px) {
    padding: 0 16px;
  }
`;

export const Content = styled.div<IContentProps>`
  position: ${({ isBottom }) => (isBottom ? "relative" : "fixed")};
  top: 50%;
  right: 0;
  display: flex;
  flex-direction: ${({ isBottom }) => (isBottom ? "row" : "column")};
  transform: ${({ isBottom }) =>
    isBottom ? "translateY(0)" : "translateY(-50%)"};
  transition: all 300ms ease-out;
  @media (prefers-color-scheme: dark) {
    filter: invert(100%) sepia(0%) saturate(2476%) hue-rotate(86deg)
      brightness(118%) contrast(119%);
  }
  a {
    margin: ${({ isBottom }) => (isBottom ? "0 15px 0 0" : "5px")};
  }
  @media (max-width: 960px) {
    position: relative;
    transition: 0;
    transform: translateY(0);
    flex-direction: row;
  }
`;
