import { SetVideo } from "../../styles/PageStyles";
import {
  ParagraphStyles,
  PageSet,
  SetContent,
  SetImage,
  Carousel,
} from "../../styles/styles";

const ProjectOverview = ({ project, openImage }) => {
  return (
    <section>
      <ParagraphStyles>
        <span id="screenshots">Screenshots</span>
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
        <PageSet>
          <SetContent>
            <ParagraphStyles>
              <p>This is the story page, you can show/hide pinyin.</p>
            </ParagraphStyles>
          </SetContent>
          <Carousel
            key={`${project.name}/LangAI1.5.png`}
            style={{
              justifyContent: "flex-end",
              marginRight: "0.5rem",
              paddingLeft: "2rem",
            }}
            onClick={() =>
              openImage(`../../assets/${project.name}/LangAI1.5.png`)
            }
          >
            <SetImage
              src={`../../assets/${project.name}/LangAI1.5.png`}
              alt={project.name + " screenshot"}
            />
          </Carousel>
          <Carousel
            key={`${project.name}/LangAI2.png`}
            style={{ justifyContent: "flex-end" }}
            onClick={() =>
              openImage(`../../assets/${project.name}/LangAI2.png`)
            }
          >
            <SetImage
              src={`../../assets/${project.name}/LangAI2.png`}
              alt={project.name + " screenshot"}
            />
          </Carousel>
        </PageSet>

        <PageSet>
          <Carousel
            key={`${project.name}/LangAI3.png`}
            style={{ justifyContent: "flex-start", paddingRight: "2rem" }}
            onClick={() =>
              openImage(`../../assets/${project.name}/LangAI3.png`)
            }
          >
            <SetImage
              src={`../../assets/${project.name}/LangAI3.png`}
              alt={project.name + " screenshot"}
            />
          </Carousel>
          <SetContent>
            <ParagraphStyles>
              <p>
                If you forget a word, it can be pressed and the definition will
                appear.
              </p>
            </ParagraphStyles>
          </SetContent>
        </PageSet>
        <PageSet>
          <SetContent>
            <ParagraphStyles>
              <p>The stories can be filtered by genre and level.</p>
            </ParagraphStyles>
          </SetContent>
          <Carousel
            key={`${project.name}/LangAI4.png`}
            style={{ justifyContent: "flex-end", paddingLeft: "2rem" }}
            onClick={() =>
              openImage(`../../assets/${project.name}/LangAI4.png`)
            }
          >
            <SetImage
              src={`../../assets/${project.name}/LangAI4.png`}
              alt={project.name + " screenshot"}
            />
          </Carousel>
        </PageSet>
        <PageSet>
          <Carousel
            key={`${project.name}/voting.mp4`}
            style={{ justifyContent: "flex-end", paddingRight: "2rem" }}
            onClick={() => openImage(`../../assets/${project.name}/voting.mp4`)}
          >
            <SetVideo autoPlay muted loop>
              <source
                src={`../../assets/${project.name}/voting.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </SetVideo>
          </Carousel>
          <SetContent>
            <ParagraphStyles>
              <p>Vote for where you want the story to go next.</p>
            </ParagraphStyles>
          </SetContent>
        </PageSet>
      </div>
    </section>
  );
};

export default ProjectOverview;
