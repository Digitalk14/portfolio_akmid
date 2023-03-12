import React, { useCallback, useState, useRef, useEffect } from "react";
import { useMobileDetection } from "~/features";
import {
  Wrapper,
  Content,
  ProjectsWrapper,
  boldStyle,
  ProjectDescriptionWrapper,
  ProjectsToggle,
  MobileProjects,
  MobileProjectDescription,
} from "./projects.style";
import { PROJECTS_LIST } from "./model";
import { ProjectsPhoto } from "./projects-photo";

interface IProjectsProps {}

export const Projects: React.FC<IProjectsProps> = ({}) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 961) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [projectId, setProjectId] = useState<number>(0);
  const handleProjectsId = useCallback((id: number) => {
    setProjectId(id);
  }, []);
  return (
    <Wrapper>
      <h3>My projects</h3>
      <Content>
        {isMobile && (
          <MobileProjects>
            {PROJECTS_LIST.map(({ title }, index) => {
              return (
                <button
                  key={title.name}
                  data-name={index === projectId}
                  onClick={() => handleProjectsId(index)}
                >
                  {title.name}
                </button>
              );
            })}
          </MobileProjects>
        )}
        {isMobile && (
          <MobileProjectDescription>
            <p>role: {PROJECTS_LIST[projectId].title.role}</p>
            <a href={PROJECTS_LIST[projectId].title.website}>Website</a>
          </MobileProjectDescription>
        )}
        <ProjectsPhoto id={projectId} />
        {!isMobile && (
          <ProjectsWrapper>
            {PROJECTS_LIST.map(({ title }, index) => {
              const { name, role, website } = title;
              return (
                <ProjectsToggle
                  key={name}
                  onClick={() => handleProjectsId(index)}
                >
                  <p className={boldStyle}>{name}</p>
                  <ProjectDescriptionWrapper isActive={index === projectId}>
                    <p>role: {role}</p>
                    <a href={website}>Website</a>
                  </ProjectDescriptionWrapper>
                </ProjectsToggle>
              );
            })}
          </ProjectsWrapper>
        )}
      </Content>
    </Wrapper>
  );
};
