import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { projectData } from "../../projects-data";
import { IoMdArrowBack } from "react-icons/io";
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

        img {
          padding-right: 0.2rem;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      > ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .small-box {
          background-color: #1a1a1a;
          color: #eee;
          border: 1px solid #1a1a1a;
          padding: 5px 15px;
          text-align: center;
          text-decoration: none;
          font-size: 16px;
          margin: 4px 0px;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 6rem;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;

          > .small-box:hover {
            background-color: #f8f8f8;
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
            transform: translateY(-2px);
          }

          > a {
            color: inherit;
            text-decoration: none;

            &:hover {
              color: #fff;
            }
          }
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
        margin-top: 0;
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }

      section {
        color: white;

        ul {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;

          .small-box {
            background-color: #eee;
            color: #1a1a1a;
            border: 1px solid #eee;
            padding: 5px 15px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            margin: 4px 0px;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 6rem;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 0.4rem;

            .small-box:hover {
              background-color: #f8f8f8;
              box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
              transform: translateY(-2px);
            }
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
                <li className="small-box" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h4>Deployment</h4>
            <ul>
              {project.liveLink && (
                <li className="small-box">
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
                <li className="small-box">
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
              <li className="small-box">
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
              <span>Background:</span>
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
