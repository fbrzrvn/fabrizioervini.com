import React, { useState } from 'react';
import { TranslateProps } from '../../models/props';
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

const Hero = ({ t }: TranslateProps) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroH1>{t('heroGreating')}</HeroH1>
        <HeroP>{t('heroText')}</HeroP>
        <HeroBtn>
          <Button
            to="work"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth
            spy
            offset={-80}
          >
            {t('heroBtnLabel')} {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtn>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
