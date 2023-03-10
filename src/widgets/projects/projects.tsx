import React, { useState } from "react";
import { Wrapper, Content, ProjectsWrapper, boldStyle } from "./projects.style";
import { PROJECTS_LIST } from "./model";
import { ProjectsPhoto } from "./projects-photo";

interface IProjectsProps {}

export const Projects: React.FC<IProjectsProps> = ({}) => {
  const [projectId, setProjectId] = useState<number>(0);
  return (
    <Wrapper>
      <h3>My projects</h3>
      <Content>
        <ProjectsPhoto id={projectId} />
        <ProjectsWrapper>
          {PROJECTS_LIST.map(({ title }, index) => {
            const { name, role, website } = title;
            return (
              <React.Fragment key={name}>
                <p
                  className={boldStyle}
                  style={{
                    textDecoration: index === projectId ? "underline" : "none",
                  }}
                >
                  {name}
                </p>
                <p>{role}</p>
                <a href={website}>Website</a>
              </React.Fragment>
            );
          })}
        </ProjectsWrapper>
      </Content>
    </Wrapper>
  );
};
