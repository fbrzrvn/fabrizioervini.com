import React from 'react';
import BtnLink from '../BtnLink';
import {
  BtnWrap,
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
        <WorkCard>
          <WorkImg src="" alt="work1" />
          <WorkH2>Work 1</WorkH2>
          <WorkP>Work Description</WorkP>
          <BtnLink to="">Visit Website</BtnLink>
        </WorkCard>
        <WorkCard>
          <WorkImg src="" alt="work2" />
          <WorkH2>Work 2</WorkH2>
          <WorkP>Work Description</WorkP>
          <BtnLink to="">Visit Website</BtnLink>
        </WorkCard>
        <WorkCard>
          <WorkImg src="" alt="work3" />
          <WorkH2>Work 3</WorkH2>
          <WorkP>Work Description</WorkP>
          <BtnWrap>
            <BtnLink to="">Visit Website</BtnLink>
          </BtnWrap>
        </WorkCard>
      </WorkWrapper>
    </WorkContainer>
  );
};

export default Work;
