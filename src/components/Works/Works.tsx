import { works } from 'data/works';
import { TranslateProps } from 'models/props';
import React from 'react';
import FLink from '../shared/FLink';
import {
  WorkImg,
  WorkInfo,
  WorkInfoH2,
  WorkInfoP,
  WorksContainer,
  WorksWrapper,
} from './styles';

const Works = ({ t }: TranslateProps) => {
  return (
    <WorksContainer>
      {works.map((work) => (
        <WorksWrapper key={work.id}>
          <WorkImg src={work.img} alt={work.title} width={516} height={300} />
          <WorkInfo>
            <WorkInfoH2>{work.title}</WorkInfoH2>
            <WorkInfoP>{t(work.description)}</WorkInfoP>
            <FLink text={'visitWebsite'} url={work.link} />
          </WorkInfo>
        </WorksWrapper>
      ))}
    </WorksContainer>
  );
};

export default Works;
