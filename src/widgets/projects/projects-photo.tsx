import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PROJECTS_LIST } from "./model";
import {
  ImageWrapper,
  Description,
  TextWrapper,
  ProjectPhotoWrapper,
  PhotoWrapper,
} from "./projects.style";

interface IProjectsPhotoProps {
  id: number;
}

export const ProjectsPhoto: React.FC<IProjectsPhotoProps> = ({ id }) => {
  let currentId: number;
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    if (currentId !== id) {
      currentId = id;
      setActive(true);
    }
  }, [id]);
  return (
    <PhotoWrapper>
      {PROJECTS_LIST.map(({ imgUrl, description }, index) => (
        <ProjectPhotoWrapper key={description} isActive={index === id}>
          <ImageWrapper>
            <Image
              src={imgUrl}
              fill
              alt={"picture of project"}
              style={{
                objectFit: isActive ? "cover" : "contain",
                transition: "all 300ms ease",
                objectPosition: "top",
              }}
            />

            <TextWrapper>
              <Description>{description}</Description>
            </TextWrapper>
          </ImageWrapper>
        </ProjectPhotoWrapper>
      ))}
    </PhotoWrapper>
  );
};
