import React, { useCallback, useState, useRef } from "react";
import {
  Wrapper,
  Content,
  ProjectsWrapper,
  boldStyle,
  ProjectDescriptionWrapper,
  ProjectsToggle,
} from "./projects.style";
import { PROJECTS_LIST } from "./model";
import { ProjectsPhoto } from "./projects-photo";

interface IProjectsProps {}

export const Projects: React.FC<IProjectsProps> = ({}) => {
  const [projectId, setProjectId] = useState<number>(0);
  const handleProjectsId = useCallback((id: number) => {
    setProjectId(id);
  }, []);
  return (
    <Wrapper>
      <h3>My projects</h3>
      <Content>
        <ProjectsPhoto id={projectId} />
        <ProjectsWrapper>
          {PROJECTS_LIST.map(({ title }, index) => {
            const { name, role, website } = title;
            return (
              <ProjectsToggle
                key={name}
                onClick={() => handleProjectsId(index)}
              >
                <p
                  className={boldStyle}
                >
                  {name}
                </p>
                <ProjectDescriptionWrapper isActive={index === projectId}>
                  <p>{role}</p>
                  <a href={website}>Website</a>
                </ProjectDescriptionWrapper>
              </ProjectsToggle>
            );
          })}
        </ProjectsWrapper>
      </Content>
    </Wrapper>
  );
};
