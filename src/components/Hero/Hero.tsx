import { faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useToggle } from 'hooks';
import { TranslateProps } from 'models/props';
import React from 'react';
import {
  ArrowIcon,
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
            {t('heroBtnLabel')}{' '}
            <ArrowIcon icon={hoverBtn ? faArrowRight : faAngleRight} />
          </Button>
        </HeroBtn>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
