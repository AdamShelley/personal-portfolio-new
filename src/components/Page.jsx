import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { projectData } from "../../projects-data";
import { IoMdArrowBack } from "react-icons/io";
import { HiExternalLink } from "react-icons/hi";
import { useState } from "react";

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 60vw;

  > div {
    margin: 4rem 0rem;
    background-color: #e6e6e6;
    border: 2px solid #e6e6e6;
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
        margin-bottom: 0.2rem;
        color: #393737;
      }

      .project-images {
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

      .carousel-img {
        margin-top: 2rem;
        max-width: 100%;
        cursor: pointer;
        border-radius: 10px;

        img {
          padding-right: 0.2rem;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 5px;
        }
      }

      > ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .small-box {
          /* background-color: #1a1a1a; */
          background: linear-gradient(to bottom, #2a2a2a, #1a1a1a);
          color: #eee;
          font-size: 1rem;
          margin: 4px 0px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          min-width: 6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          border-radius: 5px;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
          padding: 0.75rem 1.5rem;
          letter-spacing: 0.5px;
          font-size: 0.8rem;
          font-weight: 500;

          svg {
            font-size: 1.5rem;
            color: #ccc;
            transition: all 250ms ease-in-out;
          }

          &:hover {
            background: linear-gradient(115deg, green, green);
            color: #fff;
            box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.3);
            transform: translateY(-2px);
          }

          &:hover svg {
            color: #fff;
          }

          > a {
            color: inherit;
            font-family: inherit;
            text-decoration: none;
            display: block;
            height: 100%;
            width: 100%;
            padding: 0.5rem;
            font-weight: 500;
            text-align: left;
          }
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
      border-radius: 5px;

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
        margin-top: 0;
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }

      section {
        color: white;

        h4 {
          color: #eee;
          margin-bottom: 0.5rem;
        }

        ul {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;

          .small-box {
            min-width: 3rem;
            margin: 0;
            margin-right: 0.4rem;
            margin-top: 0.4rem;
            /* background: #fff;
            color: #1a1a1a; */
            background: linear-gradient(to bottom, #2a2a2a, #2a2a2a);
          }
        }

        .project-images {
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }

        .carousel-img {
          margin-top: 1rem;
          max-width: 100%;

          img {
            padding-right: 0.2rem;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

      > a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: #f8f8f8;
        color: #1a1a1a;
        position: fixed;
        bottom: 2rem;
        left: 2rem;
        z-index: 10;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

        &:hover {
          background-color: #e6e6e6;
        }

        & > svg {
          font-size: 1.5rem;
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
  font-weight: 100;

  &:first-of-type {
    margin-top: 5rem;
  }

  span {
    display: block;
    font-size: 1.1rem;
    background-color: #1a1a1a;
    color: white;
    margin-right: 0.5rem;
    padding: 0.4rem;
    border-radius: 2px;
    width: 100%;
    margin-bottom: 1rem;
    padding-left: 0.5rem;
  }

  p {
    font-weight: 100;
  }

  @media screen and (max-width: 800px) {
    line-height: 2;

    span {
      background-color: #f8f8f8;
      color: #1a1a1a;
    }
  }
`;

const ModalPortalStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  img {
    max-height: 80vh;
    max-width: 80vw;
    object-fit: contain;
    border-radius: 10px;
  }
`;

const Page = () => {
  const location = useLocation();
  let project = location.state;
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchCorrectProject = (projectName) => {
    project = projectData.filter((project) => project.name === projectName)[0];
  };

  if (!project) {
    const projectName = location.pathname.split("/")[2];
    fetchCorrectProject(projectName);
  }

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = `${project.name} | Adam Shelley`;
  }, []);

  console.log(project);

  return (
    <PageContainer>
      {project && (
        <div>
          <Link to="/projects">
            <IoMdArrowBack />
          </Link>
          <h2>{project.name}</h2>

          <section>
            <h4>Technologies</h4>
            <ul>
              {project.skills.map((skill) => (
                <li
                  className="small-box"
                  style={{ padding: "0.5rem" }}
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h4>Deployment & Source Code</h4>
            <ul>
              {project.liveLink && (
                <li className="small-box">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit The Website
                  </a>
                  <HiExternalLink />
                </li>
              )}
              {project.npm && (
                <li className="small-box">
                  <a
                    href={project.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    npm
                  </a>
                  <HiExternalLink />
                </li>
              )}

              <ul>
                <li className="small-box">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  <HiExternalLink />
                </li>
              </ul>
            </ul>
          </section>

          <section>
            <h4>Screenshots</h4>
            <ul className="project-images">
              {project.screenshots &&
                project.screenshots.map((screen) => (
                  <li
                    key={`${project.name}/${screen}`}
                    className="carousel-img"
                    onClick={() =>
                      openImage(`../../assets/${project.name}/${screen}`)
                    }
                  >
                    <img
                      src={`../../assets/${project.name}/${screen}`}
                      alt={project.name + " screenshot"}
                    />
                  </li>
                ))}
            </ul>
          </section>

          <section>
            <ParagraphStyles>
              <span>About this project</span>
              {project.background}
            </ParagraphStyles>
            <ParagraphStyles>
              <span>Learnings:</span>
              {project.learnings}
            </ParagraphStyles>
          </section>

          {selectedImage && (
            <ModalPortal>
              <ModalPortalStyles onClick={closeModal}>
                <img src={selectedImage} alt="Expanded view" />
              </ModalPortalStyles>
            </ModalPortal>
          )}
        </div>
      )}
    </PageContainer>
  );
};

const ModalPortal = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el, modalRoot]);

  return ReactDOM.createPortal(children, el);
};

export default Page;
