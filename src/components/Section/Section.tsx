import { SectionProps, TranslateProps } from 'models/props';
import React from 'react';
import Button from '../Button';
import {
  BtnWrap,
  Column1,
  Column2,
  HeadLine,
  Img,
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
  t,
}: SectionProps & TranslateProps) => {
  return (
    <SectionContainer id={id}>
      <SectionWrapper>
        <SectionRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              {topLine && <TopLine>{t(topLine)}</TopLine>}
              <HeadLine>{t(headLine)}</HeadLine>
              <Subtitle>{t(description)}</Subtitle>
              {hasLink && linkUrl && linkLabel && (
                <BtnWrap>
                  <Button href={linkUrl} primary>
                    {t(linkLabel)}
                  </Button>
                </BtnWrap>
              )}
            </TextWrapper>
          </Column1>
          <Column2>
            <Img
              src={img}
              alt={altImg}
              isCircular={isCircular}
              width={450}
              height={449}
            />
          </Column2>
        </SectionRow>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Section;
