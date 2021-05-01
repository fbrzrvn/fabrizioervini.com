import React from 'react';
import {
  Container,
  FormBtn,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormP,
  FormTextarea,
  FormWrap,
  FormWrapper,
} from './styles';

const Form = () => {
  return (
    <Container>
      <FormWrapper>
        <FormContent>
          <FormH1>Get in Touch</FormH1>
          <FormP>
            If you’d like to chat about a project please fill in the form below
            and I’ll get back within 1-2 days.
          </FormP>
          <FormWrap>
            <FormLabel>Name</FormLabel>
            <FormInput placeholder="Enter your name" />
            <FormLabel>Email</FormLabel>
            <FormInput placeholder="Enter yuor email" />
            <FormLabel>Message</FormLabel>
            <FormTextarea placeholder="How can I help you?" />
            <FormBtn>Send</FormBtn>
          </FormWrap>
        </FormContent>
      </FormWrapper>
    </Container>
  );
};

export default Form;
