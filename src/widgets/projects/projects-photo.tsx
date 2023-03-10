import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PROJECTS_LIST } from "./model";
import { ImageWrapper, Description, TextWrapper } from "./projects.style";

interface IProjectsPhotoProps {
  id: number;
}

export const ProjectsPhoto: React.FC<IProjectsPhotoProps> = ({ id }) => {
  const imgData = PROJECTS_LIST[id];
  let currentId: number;
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    if (currentId !== id) {
      currentId = id;
      setActive(true)
    }
  }, [id]);
  return (
    <ImageWrapper>
      <Image
        src={imgData.imgUrl}
        fill
        alt={"picture of project"}
        style={{
          objectFit: isActive ? "cover" : "contain",
          transition: "all 300ms ease",
        }}
      />

      <TextWrapper>
        <Description>{imgData.description}</Description>
      </TextWrapper>
    </ImageWrapper>
  );
};
