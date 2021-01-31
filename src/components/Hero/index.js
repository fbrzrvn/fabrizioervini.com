import React, { useState } from 'react';
import Video from '../../video/video.mp4';
import Button from '../Button';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtn,
  ArrowForward,
  ArrowRight, } from './HeroElements';

const Hero = () => {

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Hi! I'm faber.</HeroH1>
          <HeroP>
            Web designer and frontend developer based in Barcelona, ES.
            I love create custom and modern website.
          </HeroP>
          <HeroBtn>
            <Button to="portfolio"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              spy={true}
              exact="true"
              offset={-80}
            >
            View Portfolio {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtn>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default Hero
