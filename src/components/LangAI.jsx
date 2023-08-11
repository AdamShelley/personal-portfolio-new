import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { projectsWIP } from "../../projects-wip";
import { IoIosThumbsUp, IoMdArrowBack } from "react-icons/io";
import { BiDownload, BiBookContent, BiBrain, BiWorld } from "react-icons/bi";
import { GiButtonFinger, GiPiggyBank } from "react-icons/gi";
import { useState } from "react";

const lang_ai_android_build =
  "https://expo.dev/artifacts/eas/eXbvroPVAikLoL31PhQ5b3.apk";

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

  .page-set:first-of-type {
    margin-top: 5rem;
  }

  .page-set {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
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
        margin: 1rem 0rem;
        min-width: 100%;
        color: #fff;
        background: linear-gradient(to bottom, #2a2a2a, #1a1a1a);
        box-shadow: 6px 8px 0 rgba(0, 0, 0, 0.15);
      }
    }

    .set-image {
      max-width: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 15px;
      cursor: pointer;
      box-shadow: 6px 8px 0 rgba(0, 0, 0, 0.15);
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
      line-height: 1.5;
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
          /* background-color: #1a1a1a; */
          background: linear-gradient(to bottom, #2a2a2a, #1a1a1a);
          color: #eee;
          font-size: 1rem;
          margin: 4px 0px;
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

          &:hover {
            background: linear-gradient(115deg, green, green);
            color: #fff;
            box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.3);
            transform: translateY(-2px);
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
      border-radius: 10px;

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
      width: 80%;
      align-items: center;

      .set-content {
        padding: 0rem;

        p {
          /* background: linear-gradient(to bottom, #2a2a2a, #2a2a2a); */
          background: #eee;
          color: #615f5f;
          box-shadow: none;
          border-radius: 15px;
          font-weight: 400;
        }
      }

      .set-image {
        border: none;
        /* box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.15); */
        box-shadow: none;
      }
    }

    > div {
      margin-top: 0;
      background-color: transparent;
      border: 2px solid transparent;
      color: white;
      padding: 1rem;

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
        width: 100%;

        ul {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          width: 100%;

          .small-box {
            width: 8rem;
            margin: 0;
            margin-right: 0.5rem;
            margin-top: 0.5rem;
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

        .wip-set {
          justify-content: flex-start;
          align-items: flex-start;
        }

        .carousel-img {
          margin-top: 1rem;
          width: 100%;
          max-width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 !important;
          margin-right: 0 !important;
          border-radius: 15px;

          img {
            /* padding-right: 0.2rem; */
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
  margin-top: 2rem;
  line-height: 1.5;
  /* display: flex;
  flex-direction: column;
  align-items: center; */

  &.top-section {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    .top-section-image {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 2rem;
      width: 50%;
    }
  }

  .mt-2 {
    margin-top: 2rem;
  }

  &:first-of-type {
    margin-top: 5rem;
  }

  ul {
    margin-top: 1rem;
    list-style-type: square;

    /* width: 70%; */

    li {
      line-height: 1.8;
      margin-left: 1rem;
      text-align: justify;
      font-weight: 100;
    }
  }

  .goals {
    list-style: none;

    li {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      position: relative;
    }

    li > svg {
      min-width: 30px;
      min-height: 30px;
      margin-right: 1rem;
      color: #1a1a1a;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  span {
    display: block;
    font-size: 1.1rem;
    background-color: #1a1a1a;
    color: white;
    margin-right: 0.5rem;
    padding: 0.4rem;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 1rem;
    padding-left: 0.5rem;
  }

  h3 {
  }

  p {
    font-weight: 100;
  }

  @media screen and (max-width: 800px) {
    line-height: 2;

    &.top-section {
      flex-direction: column;
      align-items: center;
      margin-top: 5rem;

      .top-section-image {
        width: 100%;
        margin: 5rem 0;
        border-radius: 5px;

        > img {
          /* width: 100%; */
          border-radius: 5px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1) !important;
        }
      }
    }

    ul {
      width: 100%;
      align-items: flex-start;

      li {
        margin-left: 0rem;
      }
    }
    .goals li svg {
      display: none;
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

  @media screen and (max-width: 800px) {
    justify-content: center;
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
          <h2>
            {project.name} <p>(Working Title)</p>
          </h2>

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
              <span>Android Download</span>
            </ParagraphStyles>
            <ParagraphStyles className="top-section">
              <div>
                You can download the first .apk file below to try on android
                phones.
                <h3 className="mt-2">Features</h3>
                <ul>
                  <li>Stories and Pictures generated by AI.</li>
                  <li>Pressed words show translation in English.</li>
                  <li>Stories can be filtered by genre and level.</li>
                  <li>
                    Stories can be voted on by users if voting is enabled.
                  </li>
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
                    href={lang_ai_android_build}
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
                  Note - you might get a warning from Google Play Protect as
                  this app is not yet on the Play Store.
                </p>
              </div>
              <div className="top-section-image">
                <img
                  style={{
                    boxShadow: "4px 8px 0 rgba(0, 0, 0, 0.45)",
                    borderRadius: "15px",
                  }}
                  src={`../../assets/${project.name}/LangAI-gif.gif`}
                  alt={project.name + " screenshot"}
                />
              </div>
            </ParagraphStyles>
            <ParagraphStyles>
              <span>Patch Notes</span>
              <p>Last Updated: 11/08/2023</p>

              <p class="bolden mt-2">V0.0.5</p>
              <ul>
                <li>Fixed heading border issue on stories page. </li>
                <li>Non-styling improvements to all pages. </li>
                <li>
                  When the device is offline, the stories should now load
                  correctly from cache.
                </li>
                <li>Data fetching optimized / Cleaned up. </li>
                <li>
                  On the backend - votes automatically calculated after duration
                  has been reached (WIP).
                </li>
                <li>Punctuation improvements on the backend.</li>
              </ul>

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
            {/* 
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
            </div> */}

            <ParagraphStyles>
              <span>
                I decided that it should have the following goals in mind:
              </span>
              <ul className="goals">
                <li>
                  <BiBookContent />
                  It should create interesting stories at different levels and
                  about different topics.
                </li>
                <li>
                  <BiBrain />
                  It should utilize AI to generate the stories and the cover
                  pictures for them.
                </li>
                <li>
                  <IoIosThumbsUp />
                  It should feel easy and comfortable to use.
                </li>

                <li>
                  <GiPiggyBank />
                  It should be cheap to run, bearing in the mind that AI APIs
                  cost money, so databases will be required to capture the data.
                </li>
                <li>
                  <GiButtonFinger />A user interactivity aspect. Giving the
                  users the ability to vote on which direction the story should
                  go in future, adding an interactive story aspect.
                </li>
                <li>
                  <BiWorld />
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
