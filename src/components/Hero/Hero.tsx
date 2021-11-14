import Button from 'components/Button';
import { RoutesType } from 'models/enums';
import { TranslateProps } from 'models/props';
import React from 'react';
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroP } from './styles';

const Hero = ({ t }: TranslateProps) => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroH1>{t('heroGreating')}</HeroH1>
        <HeroP>{t('heroText')}</HeroP>
        <HeroBtn>
          <Button href={RoutesType.PROJECTS} primary>
            {t('heroBtnLabel')}
          </Button>
        </HeroBtn>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
