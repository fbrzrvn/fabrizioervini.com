import React from 'react';
import BtnLink from '../BtnLink';
import {
  ContactBtn,
  ContactContainer,
  ContactContent,
  ContactH1,
  ContactP,
} from './styles';

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactContent>
        <ContactH1>Have a project in mind?</ContactH1>
        <ContactP>
          I&apos;m currently available for freelance work. If you have a project
          that you want to get started or just fancy saying hey, get in touch.
        </ContactP>
        <ContactBtn>
          <BtnLink to="/contact">Contact Me</BtnLink>
        </ContactBtn>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
