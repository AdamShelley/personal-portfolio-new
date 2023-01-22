import React, { useEffect }  from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import LinkButton from './LinkButton'
import { projectData } from "../../projects-data";

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    margin: 4rem 0rem;
    background-color: #ccc;
    border: 2px solid #eee;
    min-height: 80vh;
    width: 60%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 2px;
    color: #1a1a1a;

    a {
      text-decoration: none;
      color: inherit;
      transition: all .2s ease;

      &:hover {
        font-weight: 900;
      }
    }
  }

   h2 {
    margin-top: 1rem;
    font-size: 2rem;
  }
`;

const LinkSection = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  a {
    background-color: #56c16d;
    border: 1px solid #ccc;
    text-decoration: none;
    color: inherit;
    padding: 0.4rem 0.3rem;
    font-weight: 900;
    border-radius: 5px;
    min-width: 10%;
    text-align: center;

    margin-right: 2rem;

    &:hover {
      background-color: #63e27e;
    }
  }
`;

const ParagraphStyles = styled.p`
    margin-top: 2rem;
    line-height: 1.5;

    &:first-of-type {
        margin-top: 5rem;
    }
`

const Page = () => {
  const location = useLocation();
  let project = location.state;

  const fetchCorrectProject = (projectName) => {
    project = projectData.filter((project) => project.name === projectName)[0];
  };

  if (!project) {
    const projectName = location.pathname.split("/")[2];
    fetchCorrectProject(projectName);
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageContainer>
      {project && (
        <div>
          <Link to="/">{"<- Back"}</Link>
          <h2>{project.name}</h2>
          <LinkSection>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              github
            </a>
            {project.npm && (
              <a href={project.npm} target="_blank" rel="noopener noreferrer">
                npm
              </a>
            )}
          </LinkSection>
          STACK
          DEPLOYMENT
          SCREENSHOTS
          <section>
            <ParagraphStyles>{project.description}</ParagraphStyles>
            <ParagraphStyles>{project.longDescription}</ParagraphStyles>
            <ParagraphStyles>{project.longDescription}</ParagraphStyles>
            <ParagraphStyles>{project.longDescription}</ParagraphStyles>
          </section>
          <section>
            <img src={project.image} alt="" />
          </section>
        </div>
      )}
    </PageContainer>
  );
};

export default Page;
