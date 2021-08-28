import React from 'react';
import Carousel from './Carousel';
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
} from './styles';

const Work = () => {
  return (
    <WorkContainer id="work">
      <WorkH1>Some of my latest works</WorkH1>
      <Carousel>
        {works.map(work => (
          <WorkCard key={work.id}>
            <WorkImg src={work.img} alt={work.title} />
            <WorkInfo>
              <WorkH2>{work.title}</WorkH2>
              <WorkP>{work.description}</WorkP>
              <BtnLink
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </BtnLink>
            </WorkInfo>
          </WorkCard>
        ))}
      </Carousel>
    </WorkContainer>
  );
};

export default Work;
