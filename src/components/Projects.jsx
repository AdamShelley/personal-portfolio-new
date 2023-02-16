import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";

import { projectData } from "../../projects-data";

const StyledH2 = styled.h2`
  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
`;

const ProjectContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
  flex-grow: 1;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
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
        {projectData.map((project) => (
          <Card project={project} key={project.name} />
        ))}
      </ProjectContainer>
    </>
  );
};

export default Projects;
