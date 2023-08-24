import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";

import { projectData } from "../../projects-data";
import { projectsWIP } from "../../projects-wip";

const ProjectContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  width: 80%;
  flex-grow: 1
  margin-left: 0;
  align-self: center;

  /* @media screen and (max-width: 1441px) {
    width: 90%;
  } */

  @media screen and (max-width: 1250px){
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    width: 95%;
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
