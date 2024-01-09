import styled from "styled-components";

export const SetContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
    background: linear-gradient(to bottom, #424242, #323232);
    box-shadow: 6px 8px 0 rgba(0, 0, 0, 0.15);
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const SetImage = styled.img`
  /* max-width: 100%; */
  /* width: 20rem; */
  /* height: 100%; */
  height: 40rem;
  max-height: 35rem;
  object-fit: cover;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 6px 8px 0 rgba(0, 0, 0, 0.15) !important;

  @media screen and (max-width: 800px) {
    border: none;
    box-shadow: none;
  }
`;

export const SetVideo = styled.video`
  /* max-width: 100%; */
  /* width: 100% !important; */
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  cursor: default;
  box-shadow: 6px 8px 0 rgba(0, 0, 0, 0.15) !important;

  @media screen and (max-width: 800px) {
    border: none;
    box-shadow: none;
    max-height: none;
  }
`;

export const PageSet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  height: 400px;
  height: 100%;
  padding: 2rem;

  @media screen and (min-width: 1000px) {
    width: 100%;
  }

  @media screen and (min-width: 1400px) {
    width: 70%;
  }

  @media screen and (min-width: 1500px) {
    width: 80%;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding: 0rem;
    width: 80% !important;
    align-items: center;
  }
`;

export const SmallBox = styled.li`
  /* background-color: #1a1a1a; */
  background: linear-gradient(to bottom, #2a2a2a, #222);
  color: #eee;
  font-size: 1rem;
  margin: 4px 0px;
  transition: all 0.3s ease-in-out;
  /* min-height: 2rem; */
  min-width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  border-radius: 6px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;
  font-size: 0.8rem;
  font-weight: 500;

  &:hover {
    box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.5);
  }

  > a {
    color: inherit;
    font-family: inherit;
    text-decoration: none;
    display: flex;
    height: 100%;
    width: 100%;
    padding: 0.5rem;
    font-weight: 500;
    text-align: left;
    padding: 1rem;
    align-items: center;
    justify-content: center;
  }

  > p {
    padding: 1rem;
  }

  @media screen and (max-width: 800px) {
    min-width: 2rem;
    margin: 0;
    margin-right: 0.3rem;
    margin-top: 0.3rem;
    padding: 0.75rem 1rem;
    background: linear-gradient(to bottom, #2a2a2a, #2a2a2a);

    > a,
    p {
      padding: 0.2rem;
    }
  }
`;
