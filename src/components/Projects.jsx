import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";

import { projectData } from "../../projects-data";

const ProjectContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  /* min-height: 100%; */
  margin-top: 2rem;
  width: 100%;

  @media screen and (max-width: 800px){
    flex-direction: column;
    width: 100%;
  }
`;


const Projects = () => {


useEffect(()=>{
  document.title = '{Adam Shelley - Projects}'
}, [])

  return (
    <>
      <h2>Projects</h2>
      <ProjectContainer>
        {projectData.map((project) => (
          <Card
            project={project}
            key={project.name}
          />
        ))}
      </ProjectContainer>
    </>
  );
};

export default Projects;
