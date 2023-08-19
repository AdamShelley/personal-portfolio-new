import { ParagraphStyles } from "../../styles/styles";

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
        <section className="page-set">
          <div className="set-content">
            <ParagraphStyles>
              <p>This is the story page, you can show/hide pinyin.</p>
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
              <p>
                If you forget a word, it can be pressed and the definition will
                appear.
              </p>
            </ParagraphStyles>
          </div>
        </section>
        <section className="page-set">
          <div className="set-content">
            <ParagraphStyles>
              <p>The stories can be filtered by genre and level.</p>
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
              <p>Vote for where you want the story to go next.</p>
            </ParagraphStyles>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProjectOverview;
