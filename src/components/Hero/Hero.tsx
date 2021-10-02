import React from 'react';
import useToggle from '../../hooks/useToggle';
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
  const [hoverBtn, setHoverBtn] = useToggle();

  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroH1>{t('heroGreating')}</HeroH1>
        <HeroP>{t('heroText')}</HeroP>
        <HeroBtn>
          <Button
            to="work"
            onMouseEnter={setHoverBtn}
            onMouseLeave={setHoverBtn}
            smooth
            spy
            offset={-80}
          >
            {t('heroBtnLabel')} {hoverBtn ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtn>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
