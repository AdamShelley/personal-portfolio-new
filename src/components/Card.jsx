import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  width: 25vw;
  transition: all 0.3 ease-in-out;
  border-radius: 20px;
  margin: 0.5rem;
  position: relative;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: ${(props) => props.theme.cardShadow};

  &:focus {
    outline: 3px solid green;
  }

  .card-bottom {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  .card-bottom .link-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 2rem;
  }

  .img-container {
    position: relative;
    width: 100%;
    height: 30rem;

    &::before {
      content: "";
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background-color: #1a1a1a;
      background: ${(props) => props.theme.cardBackgroundGradient};
      opacity: 1;
      transition: all 0.3s ease-in-out;
    }

    picture,
    img {
      overflow: hidden;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.8s ease-in-out;
    }

    &:hover::before {
      background: ${(props) => props.theme.cardBackgroundGradientHover};
      opacity: 0.8;
    }
  }

  .description-container {
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    flex: 1;
    z-index: 5;

    h3 {
      margin-top: 1rem;
      font-size: 2rem;
      cursor: pointer;
      font-weight: 400;

      color: #fff;
    }

    p {
      margin-top: 0.5rem;
      flex: 1;
      font-weight: 100;
      line-height: 1.6;
      font-size: 0.9rem;
      width: 100%;
      color: #fff;
    }
  }

  .skills-container {
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem 2rem;
    margin-top: auto;
    flex: none;
    z-index: 5;
    padding-bottom: 2rem;

    > p {
      margin-top: 0.2rem;
      color: #ccc;
      border-radius: 5px;
      font-size: 0.8rem;
      padding-right: 0.5rem;
      padding-top: 0.5rem;
    }

    > p:first-child {
      padding-left: 0;
    }
  }

  @media screen and (min-width: 1800px) {
    width: 25vw;
    max-width: 20vw;
    min-width: 20vw;
  }

  @media screen and (max-width: 1024px) {
    max-width: 35vw;
    min-width: 35vw;
    min-height: 35rem;
    max-height: 35rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  @media screen and (max-width: 1000px) {
    min-width: 100%;
    min-height: 20vh;
    align-self: center;
    margin-top: 2rem;
    margin-right: 0;
    margin-left: 0;
    position: relative;
    // If dark mode turn off box shadow
    box-shadow: ${(props) =>
      props.theme.name === "dark" ? "none !important" : props.theme.boxShadow};
  }

  &:hover a h3 {
    border-bottom: none;
  }

  .skills-container {
    margin: 0;
  }
`;

const Card = ({ project, customPage }) => {
  const { name, skills, description, imageName } = project;

  return (
    <CardContainer
      image={`/assets/${imageName}-small.png`}
      tabIndex="0"
      aria-label={`project-${project.name}`}
    >
      <div className={`img-container`}>
        <Link
          tabIndex="-1"
          to={customPage ? customPage : `${name}`}
          state={project}
        >
          <img src={`/assets/${imageName}.png`} alt={name + " picture"} />

          <div className="card-bottom">
            <div className="description-container">
              <h3>{name}</h3>

              <p>{description}</p>
            </div>
            <div className="skills-container">
              {skills &&
                skills.map((skill) => <p key={`${name}-${skill}`}>{skill}</p>)}
            </div>
          </div>
        </Link>
      </div>
    </CardContainer>
  );
};

export default Card;
