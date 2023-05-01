import React from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const StyledForm = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* border: 1px solid #051c2c; */
  /* background-color: #051c2c; */
  /* box-shadow: 0 10px 10px #000; */
  color: #e6e6e6;
  /* padding: 2rem; */
  border-radius: 1px;
  width: 40%;

  /* border: 1px solid #1a1a1a;
  background-color: #1a1a1a;
  color: #eee !important; */

  label {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  input {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    width: 60%;
    border-radius: 1px;
    border: 1px solid #e6e6e6;
    background-color: #d7d5e2;
    box-shadow: none;
    font-weight: 900;
    font-family: inherit;
  }

  textarea {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    width: 100%;
    height: 10rem;
    resize: none;
    border-radius: 1px;
    border: 1px solid #e6e6e6;
    background-color: #d7d5e2;
    font-size: 1rem;
    font-family: inherit;
  }

  button {
    margin-top: 1rem;
    cursor: pointer;
    padding: 1rem;
    width: 60%;
  }

  @media screen and (max-width: 800px) {
    margin-top: 5rem;
    align-self: center;
    width: 90%;
    border-radius: 5px;

    label {
      font-size: 1.2rem;
    }

    input {
      margin-top: 0.5rem;
      width: 100%;
    }

    button {
      width: 100%;
    }
  }
`;

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mjvdkdql");
  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </StyledForm>
  );
};

export default ContactForm;
