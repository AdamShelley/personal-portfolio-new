import React, {useEffect} from "react";
import styled from "styled-components";

const StyledContact = styled.section`
margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
`

const Contact = () => {

  useEffect(()=>{
    document.title = '{Adam Shelley - Contact}'
  }, [])
  return <StyledContact>Contact</StyledContact>;
};

export default Contact;
