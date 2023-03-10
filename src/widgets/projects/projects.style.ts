import { styled } from "@linaria/react";
import { css } from "@linaria/core";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 32px 0;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 60%;
  height: 330px;
`;
export const TextWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 15px;
  box-sizing: border-box;
  background: linear-gradient(
    to bottom,
    #ffffff00 0%,
    #ffffff 30%,
    #ffffff 51%,
    #ffffff 100%
  );
`;

export const Description = styled.p``;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(40% - 20px);
  a,
  p {
    cursor: pointer;
  }
  a {
    margin: 0 0 20px;
  }
`;

export const boldStyle = css`
  font-weight: 600;
`;
