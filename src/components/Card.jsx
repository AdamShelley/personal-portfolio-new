import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.article`
  /* background-color: #fff; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  width: 25vw;
  max-width: 30vw;
  min-width: 25vw;
  min-height: 30rem;
  max-height: 30rem;
  transition: all 0.3 ease-in-out;
  border-radius: 6px;
  margin: 1.5rem;
  position: relative;
  /* box-shadow: ${(props) => props.theme.cardShadow}; */
  /* border: 1px solid #000000d7; */
  overflow: hidden;

  /* Card Hover title transitions */
  a h3 {
    position: relative;
    display: inline-block;
  }

  a h3::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: #40bd27;
    transition: width 0.3s ease-in-out;
  }

  a:hover h3::after {
    width: 100%;
  }

  .card-bottom {
    /* margin-top: 1rem; */
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    justify-content: flex-start;
    flex: 1;
    width: 100%;
  }

  .card-bottom .link-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 2rem;
    margin-bottom: auto;
  }

  .img-container {
    border-top: 1px solid #1a1a1a;
    position: relative;
    min-height: 15rem;
    max-height: 15rem;
    width: 100%;
    height: 15rem;
    overflow: hidden;
    background-color: #1a1a1a;
    background-position: center center;

    &::before {
      content: "";
      position: absolute;
      z-index: 20;
      box-shadow: 0 0 35px rgba(0, 0, 0, 0.45) inset;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    picture,
    img {
      overflow: hidden;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
      transition: all 0.8s ease-in-out;
    }
  }

  .description-container {
    width: 100%;
    /* height: calc(100% - 2rem); */
    height: 100%;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
    flex: 1;

    a {
      color: inherit;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      align-self: center;
    }

    a:focus {
      outline: 3px solid green;
      background-color: green;
      color: white;
      z-index: 100;
      border-radius: 10px;
    }

    h3 {
      margin-top: 1rem;
      font-size: 1.5rem;
      border-bottom: 1px solid transparent;
      cursor: pointer;
      text-align: center;
      white-space: nowrap;
      font-weight: 400;
      margin-bottom: 1rem;
    }

    p {
      margin-top: 0.5rem;
      flex: 1;
      font-weight: 100;
      line-height: 1.5;
      font-size: 0.9rem;
      width: 100%;
    }
  }

  .skills-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap-reverse;
    padding: 1rem;
    margin-top: auto;
    flex: none;

    p {
      margin-top: 0.2rem;
      background-color: #1a1a1a;
      padding: 0.5rem;
      color: #ccc;
      border-radius: 5px;
      margin-left: 0.5rem;
      font-size: 0.8rem;
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
    border-radius: 2px;

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
    justify-content: center;
    margin: 0;

    p {
      margin: 0.2rem;
    }
  }
`;
const WipBanner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  text-align: center;
  background-color: rgba(54, 8, 8, 0.8);
  color: white;
  padding: 5px 10px;
  font-weight: bold;
  z-index: 999;
`;

const Card = ({ project, wipBanner, customPage }) => {
  const { name, skills, description, imageName } = project;

  return (
    <CardContainer image={`/assets/${imageName}-small.png`}>
      <div className={`img-container`}>
        {wipBanner && <WipBanner>Work In Progress</WipBanner>}
        <Link
          tabIndex="-1"
          to={customPage ? customPage : `${name}`}
          state={project}
        >
          <img src={`/assets/${imageName}.png`} alt={name + " picture"} />
        </Link>
      </div>
      <div className="card-bottom">
        <div className="description-container">
          <Link to={customPage ? customPage : `${name}`} state={project}>
            <h3>{name}</h3>
          </Link>
          <p>{description}</p>
        </div>
        <div className="skills-container">
          {skills &&
            skills.map((skill) => <p key={`${name}-${skill}`}>{skill}</p>)}
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
