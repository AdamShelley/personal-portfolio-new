import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Data
import { projectData } from "../../projects-data";
import { HiExternalLink } from "react-icons/hi";

// Components
import ImageModal from "./shared/ImageModal";
import PageBackButton from "./shared/BackButton";

// Styles
import {
  Carousel,
  PageContainer,
  PageSet,
  ParagraphStyles,
  SetImage,
  SmallBox,
} from "../styles/styles";

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
    document.title = `${project.name} | Adam Shelley`;
  }, []);

  return (
    <PageContainer>
      {project && (
        <div>
          <PageBackButton />

          <h2>{project.name}</h2>

          <ul>
            {project.skills.map((skill) => (
              <SmallBox key={skill}>
                <p>{skill}</p>
              </SmallBox>
            ))}
          </ul>

          <section style={{ marginTop: "2rem" }}>
            <h4>Deployment & Source Code</h4>
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "0.5rem",
              }}
            >
              {project.liveLink && (
                <SmallBox>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit The Website
                    <HiExternalLink />
                  </a>
                </SmallBox>
              )}
              {project.npm && (
                <SmallBox>
                  <a
                    href={project.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    npm
                    <HiExternalLink />
                  </a>
                </SmallBox>
              )}

              <ul>
                <SmallBox>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                    <HiExternalLink />
                  </a>
                </SmallBox>
              </ul>
            </ul>
          </section>

          <section>
            <ParagraphStyles>
              <span>About this project</span>
              <p>{project.background}</p>
            </ParagraphStyles>

            <ParagraphStyles>
              <span>Screenshots</span>

              <ul
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                {project.screenshots &&
                  project.screenshots.map((screen) => (
                    <Carousel
                      style={{
                        marginTop: "0.5rem",
                        marginLeft: "0.5rem",
                        height: "20rem",
                        maxHeight: "100%",
                        boxShadow: "none",
                      }}
                      key={`${project.name}/${screen}`}
                      onClick={() =>
                        openImage(`../../assets/${project.name}/${screen}`)
                      }
                    >
                      <SetImage
                        style={{
                          marginTop: "0.5rem",
                        }}
                        src={`../../assets/${project.name}/${screen}`}
                        alt={project.name + " screenshot"}
                      />
                    </Carousel>
                  ))}
              </ul>
            </ParagraphStyles>

            <ParagraphStyles style={{ marginTop: "3rem" }}>
              <span>Learnings:</span>
              <p>{project.learnings}</p>
            </ParagraphStyles>
          </section>
        </div>
      )}
      <ImageModal selectedImage={selectedImage} closeModal={closeModal} />
    </PageContainer>
  );
};

export default Page;
