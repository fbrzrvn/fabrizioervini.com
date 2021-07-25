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
          Born and raised in Italy, after travel around the world I finally
          settled in the sunny Barcelona, Spain.
        </HeroP>
        <HeroP>
          Well organized person, problem solver, with high attention to details.
          Looking forward to work in ambitious projects with positive people.
        </HeroP>
        <HeroBtn>
          <Button
            to="work"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth
            spy
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
