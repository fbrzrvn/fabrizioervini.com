import Button from 'components/Button';
import { RoutesType } from 'models/enums';
import { TranslateProps } from 'models/props';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroP } from './styles';

const Hero = ({ t }: TranslateProps) => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <ScrollAnimation animateIn="fadeInDown" delay={0.15 * 1000}>
          <HeroH1>{t('heroGreating')}</HeroH1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.25 * 1000}>
          <HeroP>{t('heroText')}</HeroP>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
          <HeroBtn>
            <Button href={RoutesType.PROJECTS} primary>
              {t('heroBtnLabel')}
            </Button>
          </HeroBtn>
        </ScrollAnimation>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
