import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import LinkButton from "./LinkButton";

const CardContainer = styled.article`
  background-color: #ebeaea;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #1a1a1a;
  box-shadow: 0 14px 40px #000;
  max-width: 25vw;
  min-width: 25vw;
  min-height: 35rem;
  max-height: 35rem;
  transition: all 0.3 ease-in-out;
  border-radius: 5px;
  margin: 5rem 4rem;

  /* &:hover img {
    transform: scale(1.05);
  } */

  &:hover a h3 {
    border-bottom: 1px solid #1a1a1a;
  }

  .card-bottom {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* justify-content: flex-start; */
    flex: 1;
  }

  .card-bottom .link-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 2rem;
  }

  .img-container {
    border-top: 1px solid #1a1a1a;
    position: relative;
    min-height: 15rem;
    max-height: 15rem;
    width: 100%;
    height: 15rem;
    overflow: hidden;
    background-color: #e6e6e6;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    img {
      overflow: hidden;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
      transition: all 0.8s ease-in-out;
      opacity: ${(props) => props.loaded};
    }
  }
  .blurred-img {
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(1px);
    background-image: ${(props) => props.image && `url(${props.image})`};
  }

  .blurred-img::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0;
    animation: pulse 2.5s infinite;
    background-color: #424242;
  }

  .blurred-img.loaded {
    animation: none;
    content: none;
    filter: blur(0);
  }

  @keyframes pulse {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 0;
    }
  }

  .description-container {
    width: 100%;
    height: 100%;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* margin-top: 1rem; */
    text-align: center;
    flex: none;

    a {
      color: inherit;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      align-self: center;
    }

    h3 {
      font-size: 1.8rem;
      border-bottom: 1px solid transparent;
      cursor: pointer;
      text-align: center;
      white-space: nowrap;
      font-weight: 400;
    }

    p {
      margin-top: 2rem;
      flex: 2;
      font-weight: 100;
      line-height: 1.5;
      font-size: 0.9rem;
    }
  }

  .skills-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap-reverse;
    padding: 1rem;
    /* margin-top: 2rem; */
    flex: none;

    p {
      margin-top: 0.2rem;
      background-color: #1a1a1a;
      padding: 0.5rem;
      color: #ccc;
      border-radius: 2px;
      margin-left: 0.5rem;
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 32vw;
    min-width: 25vw;
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

    &:hover a h3 {
      border-bottom: none;
    }

    &:first-child {
      margin-top: 3rem;
    }

    .skills-container {
      justify-content: center;
      margin: 0;

      p {
        margin: 0.2rem;
      }
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
  const { name, skills, liveLink, github, description, imageName } = project;

  const [imgLoaded, setImgLoaded] = useState(false);

  const loadedImg = () => setImgLoaded(true);

  return (
    <CardContainer
      loaded={imgLoaded ? 1 : 0}
      image={`/assets/${imageName}-small.png`}
    >
      <div className={`img-container ${!imgLoaded ? "blurred-img" : "loaded"}`}>
        {wipBanner && <WipBanner>Work In Progress</WipBanner>}
        <Link to={customPage ? customPage : `${name}`} state={project}>
          <img
            src={`/assets/${imageName}.png`}
            alt={name + " picture"}
            loading="lazy"
            onLoad={loadedImg}
          />
        </Link>
      </div>
      <div className="card-bottom">
        <div className="link-container">
          {liveLink && <LinkButton name={"Live"} link={liveLink} />}
          {github && <LinkButton name={"Github"} link={github} />}
        </div>
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
