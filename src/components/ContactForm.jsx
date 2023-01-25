import React from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const StyledForm = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid #ebeaea;
  background-color: #ebeaea;
  box-shadow: 0 10px 10px #000;
  color: #1a1a1a;
  padding: 2rem;
  border-radius: 2px;
  width: 50%;


  /* border: 1px solid #1a1a1a;
  background-color: #1a1a1a;
  color: #eee !important; */

  label {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  input {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    width: 50%;
    border-radius: 2px;
    border: 1px solid #ccc;
    background-color: #fff;
    box-shadow: none;
  }

  textarea {
    margin-top: 0.5rem;
    width: 100%;
    height: 10rem;
    resize: none;
    border-radius: 2px;
    border: 1px solid #ccc;
    background-color: #fff;
  }

  button {
    margin-top: 1rem;
    cursor: pointer;
    padding: 1rem;
    width: 50%;
  }
`;

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mjvdkdql");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
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
