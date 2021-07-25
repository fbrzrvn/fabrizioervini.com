import React from 'react';
import {
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  SectionContainer,
  SectionRow,
  SectionWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from './styles';
import { SectionProps } from './types';

const Section = ({
  id,
  imgStart,
  topLine,
  headLine,
  description,
  img,
  altImg,
  isCircular,
}: SectionProps) => {
  return (
    <SectionContainer id={id}>
      <SectionWrapper>
        <SectionRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading>{headLine}</Heading>
              <Subtitle>{description}</Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={altImg} isCircular={isCircular} />
            </ImgWrap>
          </Column2>
        </SectionRow>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Section;
