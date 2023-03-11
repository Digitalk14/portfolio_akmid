import { styled } from "@linaria/react";
import { css } from "@linaria/core";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 32px 0;
  @media (max-width: 960px) {
    h3 {
      padding: 0 16px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 330px;
  border-radius: 16px;
  overflow: hidden;
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
    #ffffffbd 20%,
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
    margin: 5px 0 20px;
  }
`;

export const boldStyle = css`
  font-weight: 600;
  transition: all 300 ease-out;
`;

interface IProjectDescriptionWrapperProps {
  isActive: boolean;
}

export const ProjectDescriptionWrapper = styled.div<IProjectDescriptionWrapperProps>`
  height: ${({ isActive }) => (isActive ? "50px" : "0")};
  overflow: hidden;
  transition: height 300ms ease-out;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProjectsToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  a,
  p {
    text-align: left;
  }
`;

interface IProjectPhotoWrapperProps {
  isActive: boolean;
}

export const ProjectPhotoWrapper = styled.div<IProjectPhotoWrapperProps>`
  position: absolute;
  width: 100%;
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  transition: all 300ms ease-out;
`;
export const PhotoWrapper = styled.div`
  width: 60%;
  position: relative;
  height: 330px;
`;
