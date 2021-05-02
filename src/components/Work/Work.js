import React from 'react';
import BtnLink from '../BtnLink';
import { works } from './data';
import {
  WorkCard,
  WorkContainer,
  WorkH1,
  WorkH2,
  WorkImg,
  WorkP,
  WorkWrapper,
} from './styles';

const Work = () => {
  return (
    <WorkContainer id="work">
      <WorkH1>Some of my lastest works</WorkH1>
      <WorkWrapper>
        {works.map(work => (
          <WorkCard key={work.id}>
            <WorkImg src={work.img} alt={work.title} />
            <WorkH2>{work.title}</WorkH2>
            <WorkP>{work.description}</WorkP>
            <BtnLink to={work.link}>Visit Website</BtnLink>
          </WorkCard>
        ))}
      </WorkWrapper>
    </WorkContainer>
  );
};

export default Work;
