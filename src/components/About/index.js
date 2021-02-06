import React from 'react';
import Svg from '../../assets/images/about_me.svg';
import {
  Container,
  AboutWrapper,
  Icon,
  AboutContent,
  ImgWrap,
  Img,
  AboutText,
  TopLine,
  Heading,
  AboutP,
  AboutHighLight,
  AboutLink,
  BottomLine } from './AboutElements';

const About = () => {

  return (
    <Container>
      <AboutWrapper>
        <Icon to="/">faber</Icon>
        <AboutContent>
          <ImgWrap>
            <Img src={Svg} alt="my-world" />
          </ImgWrap>
          <AboutText>
            <TopLine>let's start with introduce myself</TopLine>
            <Heading>I'm Fabrizio a junior frontend developer with passion for web design.</Heading>
            <AboutP>
              I'm a Italian ex chef appasionate of technology, with high attention to details that love build and create things.
              Since 2 years ago that I decide to switch my professional career to the world of programming.
              So I started study by myself following some on-line courses on web programming in particular.
              On October 2020 I started a master of software engineering at
              <AboutLink href="https://www.assemblerschool.com/" target="_blank" aria-label="Assembler"> Assembler </AboutLink>school.
              <AboutHighLight> I'm a React specialist but also I usually work with all the MERN stack </AboutHighLight>(MongoDB, Express, React, NodeJs).
            </AboutP>
            <BottomLine>Feel free to check out my <AboutLink href="/" aria-label="homepage">portfolio</AboutLink>  and <AboutLink href="/contact" aria-label="contactpage">contact me</AboutLink> for any further information, I always glad to answer you.</BottomLine>
          </AboutText>
        </AboutContent>
      </AboutWrapper>
    </Container>
  )
}

export default About;