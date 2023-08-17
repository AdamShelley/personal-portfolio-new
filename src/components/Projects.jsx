import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";

import { projectData } from "../../projects-data";
import { projectsWIP } from "../../projects-wip";

const ProjectContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  width: 100%;
  flex-grow: 1
  margin-left: 0;;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    margin-top: 0
  }
`;

const Projects = () => {
  useEffect(() => {
    document.title = "Adam Shelley | Projects";
  }, []);

  // If back button is pushed, scroll to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
