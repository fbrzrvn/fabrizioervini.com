import React, { useState } from 'react';
import Form from './Form';
import Success from './Success';
import {
  Container,
  FormWrapper,
  Icon } from './ContactElements';


const Contact = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <Container>
        <FormWrapper>
          <Icon to="/">faber</Icon>
          {!isSubmitted ? <Form submitForm={submitForm} /> : <Success />}
        </FormWrapper>
      </Container>
    </>
  )
}

export default Contact;