import { works } from 'data/works';
import { TranslateProps } from 'models/props';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import FLink from '../shared/FLink';
import {
  WorkDescription,
  WorkHeading,
  WorkImg,
  WorkInner,
  WorksContainer,
  WorksWrapper,
  WorkTitle,
} from './styles';

const Works = ({ t }: TranslateProps) => {
  return (
    <WorksContainer>
      <WorkHeading>{t('workTitle')}</WorkHeading>
      {works.map((work) => (
        <WorksWrapper key={work.id}>
          <ScrollAnimation
            initiallyVisible={false}
            animateIn={work.id % 2 === 0 ? 'fadeInRight' : 'fadeInLeft'}
          >
            <WorkImg src={work.img} alt={work.title} width={516} height={300} />
          </ScrollAnimation>
          <ScrollAnimation
            initiallyVisible={false}
            animateIn={work.id % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
          >
            <WorkInner>
              <WorkTitle>{work.title}</WorkTitle>
              <WorkDescription
                dangerouslySetInnerHTML={{ __html: `${t(work.description)}` }}
              />
              <FLink text={'visitWebsite'} url={work.link} />
            </WorkInner>
          </ScrollAnimation>
        </WorksWrapper>
      ))}
    </WorksContainer>
  );
};

export default Works;
