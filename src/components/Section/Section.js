import { bool, string } from 'prop-types';
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

const Section = ({
  id,
  imgStart,
  topLine,
  headLine,
  description,
  img,
  altImg,
}) => {
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
              <Img src={img} alt={altImg} />
            </ImgWrap>
          </Column2>
        </SectionRow>
      </SectionWrapper>
    </SectionContainer>
  );
};

Section.propTypes = {
  id: string.isRequired,
  imgStart: bool.isRequired,
  topLine: string.isRequired,
  headLine: string.isRequired,
  description: string.isRequired,
  img: string,
  altImg: string,
};

Section.defaultProps = {
  img: '',
  altImg: '',
};

export default Section;
