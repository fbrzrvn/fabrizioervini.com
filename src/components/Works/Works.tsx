import { works } from 'data/works';
import { TranslateProps } from 'models/props';
import React from 'react';
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
          <WorkImg src={work.img} alt={work.title} width={516} height={300} />
          <WorkInner>
            <WorkTitle>{work.title}</WorkTitle>
            <WorkDescription
              dangerouslySetInnerHTML={{ __html: `${t(work.description)}` }}
            />
            <FLink text={'visitWebsite'} url={work.link} />
          </WorkInner>
        </WorksWrapper>
      ))}
    </WorksContainer>
  );
};

export default Works;
