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
  a {
    margin: ${({ isBottom }) => (isBottom ? "0 15px 0 0" : "5px")};
  }
`;
