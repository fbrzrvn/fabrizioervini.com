import React from 'react';
import ROUTES from '../../routes';
import BtnLinkRouter from '../BtnLinkRouter';
import { SectionProps } from './sectionProps';
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
  hasLink,
  linkLabel,
  linkUrl,
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
              {hasLink && (
                <BtnLinkRouter to={linkUrl ?? ROUTES.HOME}>
                  {linkLabel}
                </BtnLinkRouter>
              )}
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
