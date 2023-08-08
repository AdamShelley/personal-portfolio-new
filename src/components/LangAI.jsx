import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { projectsWIP } from "../../projects-wip";
import { IoMdArrowBack } from "react-icons/io";
import { BiDownload } from "react-icons/bi";

import { useState } from "react";

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 70vw;

  .strikethrough {
    text-decoration: line-through !important;
  }

  .bolden {
    font-weight: 900;
  }

  .phone-screenshots {
    object-fit: contain;
    margin-top: 2rem;
  }
  .page-set {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    height: 400px;
    height: 100%;
    padding: 2rem;

    .set-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;

      p {
        font-weight: 200;
        font-size: 1rem;
        padding: 1rem;
        line-height: 1.5;
        border-radius: 5px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        margin: 1rem 0rem;
        min-width: 100%;
        color: #fff;
        background-color: #474242;
      }
    }

    .set-image {
      max-width: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 15px;
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
        height: 100%;

        img {
          width: 50%;
          height: 100%;
          object-fit: cover;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
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
          padding: 0 !important;

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

  .mt-2 {
    margin-top: 2rem;
  }

  &:first-of-type {
    margin-top: 5rem;
  }

  ul {
    margin-top: 1rem;

    li {
      line-height: 1.8;
      margin-left: 1rem;
      text-align: justify;
      font-weight: 100;
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
    padding-left: 0.5rem;
  }

  p {
    font-weight: 100;
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
    border-radius: 15px;
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

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 2rem 0;
  margin-left: 0.5rem;

  a {
    display: inline-block;
    padding: 1rem 2rem;
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    background-color: #333;
    border-radius: 5px;
    transform: translateY(0px);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      margin-right: 0.5rem;
      font-size: 1.5rem;
    }

    &:hover {
      background-color: #56c16d;
      transform: translateY(-2px);
      cursor: pointer;
    }
  }
`;

const LangAI = () => {
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

            <ParagraphStyles>
              <span>Android Download (WIP)</span>
              You can download the first .apk file below to try on android
              phones.
              <h3 className="mt-2">Features</h3>
              <ul>
                <li>Stories and Pictures generated by AI.</li>
                <li>Pressed words show translation in English.</li>
                <li>Stories can be filtered by genre and level.</li>
                <li>Stories can be voted on by users if voting is enabled.</li>
                <li>Dark mode and Light mode.</li>
              </ul>
              <h3 className="mt-2">Known Issues</h3>
              <ul>
                <li>
                  It is not optimized, especially for very small/large android
                  phones.
                </li>
                <li>
                  Some punctuation issues depending on AI model. Calibration
                  needed.
                </li>
                <li>Light mode needs further testing.</li>
                <li>Icons are WIP.</li>
              </ul>
              <br />
              <ButtonContainer>
                <a
                  href="https://expo.dev/artifacts/eas/6ak3rXuqV2D7Hq1bfz2e5r.apk"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download .APK file for android."
                >
                  <BiDownload />
                  Download .APK
                </a>
              </ButtonContainer>
              <p style={{ marginTop: "1rem", fontWeight: 100 }}>
                Thank you for testing my app.
              </p>
              <p className="mt-2">
                Note - you might get a warning from Google Play Protect as this
                app is not yet on the Play Store.
              </p>
            </ParagraphStyles>
            <ParagraphStyles>
              <span>Patch Notes</span>
              <p>Last Updated: 03/08/2023</p>
              <p class="bolden mt-2">V0.0.4</p>
              <ul>
                <li>Fixed haptics for android.</li>
                <li>Added loading skeleton for the home page.</li>
                <li>Internal code cleanup.</li>
              </ul>

              <p class="bolden mt-2">V0.0.3</p>
              <ul>
                <li>Initial release of .apk files.</li>
                <li>Backend updated to handle voting duration cutoff.</li>
              </ul>
            </ParagraphStyles>
          </section>

          <section>
            <ParagraphStyles>
              <span>The Why</span>

              <p>
                I wanted to create an app that could help me learn a language
                (specifically Chinese). One of the major difficulties I found
                with the learning process was finding enough content at my level
                to practice reading with.
              </p>
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
                src={`../../assets/${project.name}/LangAI-gif.gif`}
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
                  story should go in future, adding an interactive story aspect.
                </li>
                <li>
                  This app could be modified to include other languages too.
                </li>
              </ul>
            </ParagraphStyles>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <section className="page-set">
                <div className="set-content">
                  <ParagraphStyles>
                    This is the story page, you can show/hide pinyin.
                  </ParagraphStyles>
                </div>
                <li
                  key={`${project.name}/LangAI1.5.png`}
                  className={`carousel-img`}
                  style={{
                    justifyContent: "flex-end",
                    marginRight: "0.5rem",
                    paddingLeft: "2rem",
                  }}
                  onClick={() =>
                    openImage(`../../assets/${project.name}/LangAI1.5.png`)
                  }
                >
                  <img
                    className="set-image"
                    src={`../../assets/${project.name}/LangAI1.5.png`}
                    alt={project.name + " screenshot"}
                  />
                </li>
                <li
                  key={`${project.name}/LangAI2.png`}
                  className={`carousel-img`}
                  style={{ justifyContent: "flex-end" }}
                  onClick={() =>
                    openImage(`../../assets/${project.name}/LangAI2.png`)
                  }
                >
                  <img
                    className="set-image"
                    src={`../../assets/${project.name}/LangAI2.png`}
                    alt={project.name + " screenshot"}
                  />
                </li>
              </section>

              <section className="page-set">
                <li
                  key={`${project.name}/LangAI3.png`}
                  className="carousel-img carousel-img-left"
                  style={{ justifyContent: "flex-start", paddingRight: "2rem" }}
                  onClick={() =>
                    openImage(`../../assets/${project.name}/LangAI3.png`)
                  }
                >
                  <img
                    className="set-image"
                    src={`../../assets/${project.name}/LangAI3.png`}
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
                  key={`${project.name}/LangAI4.png`}
                  className={`carousel-img`}
                  style={{ justifyContent: "flex-end", paddingLeft: "2rem" }}
                  onClick={() =>
                    openImage(`../../assets/${project.name}/LangAI4.png`)
                  }
                >
                  <img
                    className="set-image"
                    src={`../../assets/${project.name}/LangAI4.png`}
                    alt={project.name + " screenshot"}
                  />
                </li>
              </section>
              <section className="page-set">
                <li
                  key={`${project.name}/voting-gif.gif`}
                  className={`carousel-img`}
                  style={{ justifyContent: "flex-end", paddingRight: "2rem" }}
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
                    Vote for where you want the story to go next.
                  </ParagraphStyles>
                </div>
              </section>
            </div>
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

export default LangAI;
