import React, { useState } from 'react';
import {
  ArrowForward,
  ArrowRight,
  Button,
  HeroBtn,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
} from './styles';

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroH1>Hi! I&apos;m faber.</HeroH1>
        <HeroP>
          Web designer and developer based in Barcelona, ES. Well organized
          person, problem solver, with high attention to details. Interessed in
          the entire frontend spectrum and working in ambitious projects with
          postive people.
        </HeroP>
        <HeroBtn>
          <Button
            to="work"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth
            spy
            exact="true"
            offset={-80}
          >
            View my Works {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtn>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
