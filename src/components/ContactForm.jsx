import React from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const StyledForm = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #ccc;
  border-radius: 5px;
  width: 40%;
  font-family: "Ubuntu", sans-serif;

  label {
    font-size: 1.4rem;
    margin-top: 1rem;
    font-weight: 400;
  }
  input,
  textarea {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #1a1a1a;
    color: #ccc;
    font-weight: 400;
    font-size: 1.2rem;
    font-family: inherit;
  }

  textarea {
    width: 100%;
    height: 10rem;
    resize: none;
  }

  button {
    background-color: #56c16d;
    color: #1a1a1a;
    border: none;
    margin-top: 2rem;
    cursor: pointer;
    padding: 1rem;
    width: 100%;
    font-weight: 500;
    font-size: 1.2rem;
    -webkit-appearance: none;
    transition: background-color 0.2s ease-in;
  }

  button:hover {
    background-color: #63e27e;
  }

  @media screen and (max-width: 800px) {
    margin-top: 5rem;
    align-self: center;
    width: 100%;
    border-radius: 5px;

    label,
    input,
    textarea {
      font-size: 1.2rem;
    }

    input {
      margin-top: 0.5rem;
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
