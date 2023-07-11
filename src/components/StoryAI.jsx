import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { projectsWIP } from "../../projects-wip";
import { IoMdArrowBack } from "react-icons/io";
import { useState } from "react";

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 60vw;

  .phone-screenshots {
    object-fit: contain;
    margin-top: 2rem;
  }
  .page-set {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    padding: 2rem;

    .set-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 2rem;
      font-size: 1.2rem;

      p {
        font-weight: 500;
      }
    }

    .set-image {
      max-width: 100%;
      width: 100%;
      max-height: 700px;
      object-fit: contain;
      /* height: 500px; */
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      border: 3px solid #333;
      cursor: pointer;
    }
  }

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
        justify-content: flex-start;
      }

      .carousel-img {
        margin-top: 5rem;
        /* max-width: 100%; */
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          /* padding-right: 0.2rem; */
          width: 50%;
          /* height: 100%; */
          object-fit: cover;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          border: 3px solid #333;
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
          white-space: nowrap;

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
      max-height: 50vh;
      object-fit: contain;
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

    .page-set {
      flex-direction: column;

      padding: 0rem;

      .set-content {
        padding: 0rem;
      }

      .set-image {
        border: none;
      }
    }

    > div {
      margin-top: 0;
      background-color: transparent;
      border: 2px solid transparent;
      color: white;

      img {
        max-height: 80vh;
        border: none !important;
      }

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

        .wip-set {
          justify-content: flex-start;
          align-items: flex-start;
        }

        .carousel-img {
          margin-top: 1rem;
          max-width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            padding-right: 0.2rem;
            width: 100%;
            height: 100%;
            object-fit: contain;
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
  margin-top: 5rem;
  line-height: 1.5;

  &:first-of-type {
    margin-top: 5rem;
  }

  ul {
    margin-top: 1rem;
    /* width: 100%; */

    li {
      margin-top: 0.5rem;
      margin-left: 2rem;
      text-align: justify;
    }
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
  }

  @media screen and (max-width: 800px) {
    line-height: 2;

    ul {
      width: 100%;
      li {
        margin-left: 0rem;
      }
    }

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
  }
`;

const TechStackStyles = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  margin: 0 auto;

  li {
    margin-top: 2rem !important;
    text-align: center;
    width: 80%;
  }
`;

const StoryAI = () => {
  const location = useLocation();
  let project = location.state;
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    project = projectsWIP[0];
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
          <h2>{project.name} - (Working Title)</h2>

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
            <ParagraphStyles>
              <span>The Why?</span> I wanted to create an app that could help me
              learn a language (specifically Chinese). One of the major
              difficulties I found with the learning process was finding enough
              content at my level to practice reading with.
              <h3 style={{ marginTop: "2rem" }}>
                Note: This project is still work in progress.
              </h3>
            </ParagraphStyles>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "5rem",
              }}
            >
              <img
                style={{
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                  border: "3px solid #333",
                }}
                src={`../../assets/${project.name}/storyai-gif.gif`}
                alt={project.name + " screenshot"}
              />
            </div>

            <ParagraphStyles>
              <span>
                I decided that it should have the following goals in mind:
              </span>
              <ul>
                <li>
                  It should create interesting stories at different levels and
                  about different topics.
                </li>
                <li>
                  It should utilize AI to generate the stories and the cover
                  pictures for them.
                </li>
                <li>It should feel easy and comfortable to use.</li>
                <li>
                  It should be cheap to run, bearing in the mind that AI APIs
                  cost money, so databases will be required to capture the data.
                </li>
                <li>
                  It would be nice to include a user interactivity aspect.
                  Giving the users the ability to vote on which direction the
                  story should go in future. Adding an interactive story aspect.
                </li>
                <li>
                  This app could be modified to include other languages too.
                </li>
              </ul>
            </ParagraphStyles>
            <section className="page-set">
              <div className="set-content">
                <ParagraphStyles>
                  This is the story page, you can show/hide pinyin.
                </ParagraphStyles>
              </div>
              <li
                key={`${project.name}/storyai1.5.png`}
                className={`carousel-img`}
                style={{ justifyContent: "flex-end", marginRight: "0.5rem" }}
                onClick={() =>
                  openImage(`../../assets/${project.name}/storyai1.5.png`)
                }
              >
                <img
                  className="set-image"
                  src={`../../assets/${project.name}/storyai1.5.png`}
                  alt={project.name + " screenshot"}
                />
              </li>
              <li
                key={`${project.name}/storyai2.png`}
                className={`carousel-img`}
                style={{ justifyContent: "flex-end" }}
                onClick={() =>
                  openImage(`../../assets/${project.name}/storyai2.png`)
                }
              >
                <img
                  className="set-image"
                  src={`../../assets/${project.name}/storyai2.png`}
                  alt={project.name + " screenshot"}
                />
              </li>
            </section>
            <section className="page-set">
              <li
                key={`${project.name}/storyai3.png`}
                className="carousel-img carousel-img-left"
                style={{ justifyContent: "flex-start" }}
                onClick={() =>
                  openImage(`../../assets/${project.name}/storyai3.png`)
                }
              >
                <img
                  className="set-image"
                  src={`../../assets/${project.name}/storyai3.png`}
                  alt={project.name + " screenshot"}
                />
              </li>
              <div className="set-content">
                <ParagraphStyles>
                  If you forget a word, it can be pressed and the definition
                  will appear.
                </ParagraphStyles>
              </div>
            </section>
            <section className="page-set">
              <div className="set-content">
                <ParagraphStyles>
                  The stories can be filtered by genre and level.
                </ParagraphStyles>
              </div>
              <li
                key={`${project.name}/storyai4.png`}
                className={`carousel-img`}
                style={{ justifyContent: "flex-end" }}
                onClick={() =>
                  openImage(`../../assets/${project.name}/storyai4.png`)
                }
              >
                <img
                  className="set-image"
                  src={`../../assets/${project.name}/storyai4.png`}
                  alt={project.name + " screenshot"}
                />
              </li>
            </section>
            <section className="page-set">
              <li
                key={`${project.name}/voting-gif.gif`}
                className={`carousel-img`}
                style={{ justifyContent: "flex-end" }}
                onClick={() =>
                  openImage(`../../assets/${project.name}/voting-gif.gif`)
                }
              >
                <img
                  className="set-image"
                  src={`../../assets/${project.name}/voting-gif.gif`}
                  alt={project.name + " screenshot"}
                />
              </li>
              <div className="set-content">
                <ParagraphStyles>
                  NEW:Vote for where you want the story to go next.
                </ParagraphStyles>
              </div>
            </section>
          </section>

          <ParagraphStyles>
            <span>Tech & API's</span>
            <TechStackStyles>
              <li>
                <h3>Frontend</h3> React Native with Expo GO
              </li>
              <li>
                <h3>Backend</h3> NodeJS (Express)
              </li>
              <li>
                <h3>Database</h3> Supabase
              </li>
              <li>
                <h3>Story AI</h3> OpenAI GPT
              </li>
              <li>
                <h3>Image Creation</h3> DALL-E
              </li>
              <li>
                <h3>Translations</h3> DeepL API
              </li>
            </TechStackStyles>
          </ParagraphStyles>

          <ParagraphStyles>
            <span>The story so far...</span>
            The app is progressing well, so far I have built the following:
            <ul>
              <li>
                A backend API that can generate stories based on a topic, level,
                and word count.
              </li>
              <li>The pictures used are generated by AI.</li>
              <li>A frontend that can display the stories.</li>
              <li>
                A database that holds the stories and the dictionary of words.
              </li>
              <li>The stories can be filtered by genre and level.</li>
            </ul>
          </ParagraphStyles>

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

export default StoryAI;
