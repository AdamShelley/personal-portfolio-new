import React from "react";
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
  /* margin: 1rem; */
  box-shadow: 0 14px 40px #000;
  max-width: 25vw;
  min-width: 25vw;
  min-height: 35rem; // temp height
  transition: all 1s ease-in;

  /* border: 1px solid #1a1a1a; */
  border: 3px solid #ebe2e2;
  border-radius: 5px;
  margin-right: 3rem;
  margin-left: 3rem;
  margin-top: 2rem;

  &:not(:last-of-type) {
    /* margin-right: 1rem; */
  }

  &:hover {
    border: 3px solid #56c16d;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover a h3 {
    border-bottom: 1px solid #1a1a1a;
  }

  .card-bottom {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 2;
  }

  .card-bottom .link-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img-container {
    border-top: 1px solid #1a1a1a;
    height: 15rem;
    min-height: 15rem;
    max-height: 15rem;
    width: 100%;
    overflow: hidden;
    background-color: #e6e6e6;

    img {
      overflow: hidden;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.8s ease-in-out;
    }
  }

  .description-container {
    width: 100%;
    height: 100%;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    a {
      color: inherit;
      text-decoration: none;
      border-bottom: 1px solid transparent;
    }

    h3 {
      font-size: 1.4rem;
      border-bottom: 1px solid transparent;
      cursor: pointer;
    }

    p {
      margin-top: 2rem;
      flex: 2;
    }
  }

  .skills-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    margin-top: 2rem;

    p {
      background-color: #1a1a1a;
      padding: 0.5rem;
      color: #ccc;
      border-radius: 5px;
      margin-left: 0.5rem;
    }
  }

  @media screen and (max-width: 800px) {
    min-width: 90%;
    min-height: 20vh;
    align-self: center;
    margin-top: 5rem;
    border-radius: 2px;
    border: 1px solid #e1e1e1;
    margin-right: 0;
    margin-left: 0;

    &:first-child {
      margin-top: 3rem;
    }

    .img-container {
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
    }
    .skills-container {
      flex-wrap: wrap;
      justify-content: center;
      margin: 0;
      p {
        margin: 0.2rem;
      }
    }
  }
`;

const Card = ({ project }) => {
  const { name, image, skills, liveLink, github, description, imageName } =
    project;

  return (
    <CardContainer>
      <div className="img-container">
        <Link to={`${name}`} state={project}>
          <img src={`../../assets/${imageName}`} alt={name + " picture"} />
        </Link>
      </div>
      <div className="card-bottom">
        <div className="link-container">
          <LinkButton name={"Live"} link={liveLink} />
          <LinkButton name={"Github"} link={github} />
        </div>
        <div className="description-container">
          <Link to={`${name}`} state={project}>
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
