import React from 'react';
import {
  Container,
  AboutWrapper,
  Icon,
  AboutContent,
  AboutH1 } from './AboutElements';

const About = () => {
  return (
    <Container>
      <AboutWrapper>
        <Icon to="/">faber</Icon>
        <AboutContent>
          <AboutH1>About Me</AboutH1>
        </AboutContent>
      </AboutWrapper>
    </Container>
  )
}

export default About;
