import styled from 'styled-components';
import { Heading } from 'styles/globals';

type GridProps = {
  imgStart: boolean;
};
type ImgProps = {
  isCircular: boolean;
};

export const SectionContainer = styled.div`
  padding: 50px 0;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  @media screen and (min-width: 768px) {
    padding: initial;
  }
`;

export const SectionWrapper = styled.div`
  display: grid;
  align-items: center;
  min-height: calc(100vh - 80px);
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    padding: 0 24px;
  }
`;

export const SectionRow = styled.div<GridProps>`
  display: grid;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
  @media screen and (min-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col2 col1"` : `"col1 col2"`};
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const Column2 = styled.div`
  grid-area: col2;
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (min-width: 768px) {
    padding-bottom: 0;
  }
`;

export const TopLine = styled.p`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.primary};
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

export const HeadLine = styled.h1`
  ${Heading}
`;

export const Subtitle = styled.p`
  max-width: 440px;
  color: ${({ theme }) => theme.textSecondary};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  height: 100%;
  max-width: 450px;
`;

export const Img = styled.img<ImgProps>`
  display: block;
  width: 60%;
  margin: auto;
  border-radius: ${({ isCircular }) => (isCircular ? '50%' : '')};
  filter: grayscale(25%);
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
