import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { projectsWIP } from "../../projects-wip";
import { IoMdArrowBack } from "react-icons/io";

// Components
import WhyContent from "./langai/WhyContent";
import Contents from "./langai/Contents";
import GoalSection from "./langai/GoalSection";
import AndroidDownload from "./langai/AndroidDownload";
import ProjectOverview from "./langai/ProjectOverview";
import TechStack from "./langai/TechStack";
import PatchNotes from "./langai/PatchNotes";
import ImageModal from "./ImageModal";

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 60vw;

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
    align-items: flex-start;
    width: 80%;
    height: 400px;
    height: 100%;
    padding: 2rem;

    .set-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* width: 100%; */

      > div {
        margin-top: 0rem !important;
      }

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
    background-color: ${(props) => props.theme.projectBackground};
    border: 2px solid ${(props) => props.theme.text};
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
          border-radius: 6px;
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

  @media screen and (min-width: 1700px) {
    width: 40vw;
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
          background: ${(props) => props.theme.cardBackground};
          color: #1a1a1a;
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
      color: ${(props) => props.theme.text};
      padding: 1rem;

      img {
        max-height: 80vh;
        border: none !important;
      }

      h2 {
        margin-top: 0;
        font-size: 2.5rem;
        margin-bottom: 2rem;
        color: ${(props) => props.theme.text};
      }

      section {
        color: ${(props) => props.theme.text};
        width: 100%;

        ul {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          width: 100%;

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

          <h2>{project.name}</h2>

          <section>
            <ul>
              {project.skills.map((skill) => (
                <li className="small-box" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>

            <Contents />
            <WhyContent />
            <GoalSection />
            <AndroidDownload />
          </section>

          <ProjectOverview project={project} openImage={openImage} />
          <TechStack />
          <PatchNotes />
          <ImageModal selectedImage={selectedImage} closeModal={closeModal} />
        </div>
      )}
    </PageContainer>
  );
};

export default LangAI;
