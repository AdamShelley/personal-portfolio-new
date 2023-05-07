import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { projectData } from "../../projects-data";

import { IoMdArrowBack } from "react-icons/io";

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 60vw;

  > div {
    margin: 4rem 0rem;
    background-color: #ccc;
    border: 2px solid #ccc;
    min-height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 2px;
    color: #1a1a1a;

    h2 {
      margin-top: 4rem;
    }

    section {
      margin-top: 1rem;

      h4 {
        margin-top: 1rem;
      }

      > ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        > li {
          font-size: 0.8rem;
          margin-top: 0.5rem;
          margin-right: 1rem;
          border: 1px solid #eee;
          padding: 0.3rem 0.4rem;
          background: linear-gradient(to right, #1a1a1a, #393945);
          color: #ccc;
          min-width: 3rem;
          text-align: center;
          border-radius: 2px;

          a {
            text-decoration: none;
            color: inherit;
            cursor: pointer;
          }

          a:hover li {
            background-color: #595959;
          }
        }
      }

      img {
        /* margin-top: 1rem; */
        width: 100%;
        max-height: 30vh;
        object-fit: cover;
        border-radius: 2px;
      }
    }

    > a {
      text-decoration: none;
      transition: all 0.2s ease;
      font-size: 1.5rem;
      width: 2rem;
      height: 2rem;
      background-color: #1a1a1a;
      color: #ccc;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        font-weight: 900;
        color: #eee;
      }
    }
  }

  h2 {
    margin-top: 1rem;
    font-size: 2.5rem;
  }

  @media screen and (max-width: 800px) {
    width: 105%;

    > div {
      margin-top: 0;
      background-color: transparent;
      border: 2px solid transparent;
      color: white;

      h2 {
        margin-top: 2rem;
      }

      section {
        color: white;
        ul {
          li {
            padding: 0.5rem;
            min-width: auto;
            background: linear-gradient(to right, #e6e6e6, #eee);
            color: black;
          }
        }
      }

      > a {
        background-color: #e6e6e6;
        color: #484444;
        width: 10%;
        border-radius: 2px;

        svg {
          font-weight: 900;
          font-size: 2rem;
        }
      }
    }

    h2 {
      font-size: 2rem;
    }
  }
`;

const ParagraphStyles = styled.p`
  margin-top: 2rem;
  line-height: 1.5;

  &:first-of-type {
    margin-top: 5rem;
  }

  span {
    font-size: 1.1rem;
    background-color: #eee;
    margin-right: 0.5rem;
    padding: 0.2rem;
    border-radius: 2px;
  }

  @media screen and (max-width: 800px) {
    line-height: 2;
    span {
      color: #484444;
    }
  }
`;

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
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      {project && (
        <div>
          <Link to="/projects">
            <IoMdArrowBack />
          </Link>
          <h2>{project.name}</h2>

          <section>
            <h4>Stack</h4>
            <ul>
              {project.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
          <section>
            <h4>Deployment</h4>
            <ul>
              {project.liveLink && (
                <li>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                </li>
              )}
              {project.npm && (
                <li>
                  <a
                    href={project.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    npm
                  </a>
                </li>
              )}
            </ul>
          </section>
          <section>
            <h4>Source Code</h4>
            <ul>
              <li>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h4>Screenshots</h4>
            <ul>
              <li>
                <img
                  src={`../../assets/${project.imageName}`}
                  alt="cover screenshot"
                />
              </li>
              {project.screenshots &&
                project.screenshots.map((screen) => (
                  <li key={`${project.name}/${screen}`}>
                    <img
                      src={`../../assets/${project.name}/${screen}`}
                      alt={project.name + " screenshot"}
                    />
                  </li>
                ))}
            </ul>
          </section>

          <section>
            <ParagraphStyles>{project?.description}</ParagraphStyles>
            <ParagraphStyles>
              <span>Background:</span>
              {project?.background}
            </ParagraphStyles>
            <ParagraphStyles>
              <span>Learnings:</span>
              {project?.learnings}
            </ParagraphStyles>
          </section>
        </div>
      )}
    </PageContainer>
  );
};

export default Page;
