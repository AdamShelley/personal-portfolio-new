import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";

import { projectData } from "../../projects-data";
import { projectsWIP } from "../../projects-wip";

const StyledH2 = styled.h2`
  @media screen and (max-width: 800px) {
    font-size: 2rem;
    margin-left: 1rem;
  }
`;

const ProjectContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  width: 100%;
  flex-grow: 1;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Projects = () => {
  useEffect(() => {
    document.title = "{Adam Shelley - Projects}";
  }, []);

  return (
    <>
      <StyledH2>Projects</StyledH2>

      <ProjectContainer>
        <Card
          project={projectsWIP[0]}
          key={"project-wip"}
          customPage={projectsWIP[0].customPage}
          // wipBanner
        />
        {projectData.map((project) => (
          <Card project={project} key={project.name} />
        ))}
      </ProjectContainer>
    </>
  );
};

export default Projects;
