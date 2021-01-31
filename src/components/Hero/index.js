import React from 'react';
import Video from '../../video/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtn, } from './HeroElements';

const Hero = () => {
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
          </HeroBtn>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default Hero
