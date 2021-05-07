import React from 'react';
import { works } from './data';
import {
  BtnLink,
  WorkCard,
  WorkContainer,
  WorkH1,
  WorkH2,
  WorkImg,
  WorkInfo,
  WorkP,
  WorkWrapper,
} from './styles';

const Work = () => {
  return (
    <WorkContainer id="work">
      <WorkH1>Some of my latest works</WorkH1>
      <WorkWrapper>
        {works.map(work => (
          <WorkCard key={work.id}>
            <WorkImg src={work.img} alt={work.title} />
            <WorkInfo>
              <WorkH2>{work.title}</WorkH2>
              <WorkP>{work.description}</WorkP>
              <BtnLink href={work.link} target="blank">
                Visit Website
              </BtnLink>
            </WorkInfo>
          </WorkCard>
        ))}
      </WorkWrapper>
    </WorkContainer>
  );
};

export default Work;
