import styled from 'styled-components';
import { Heading, Text } from 'styles/mixins';

type GridProps = {
  imgStart: boolean;
};
type ImgProps = {
  isCircular: boolean;
};

export const SectionContainer = styled.section`
  padding: 100px 0;
  background: ${({ theme }) => theme.footer};
  color: ${({ theme }) => theme.text};
`;
export const SectionWrapper = styled.div`
  display: grid;
  align-items: center;
  min-height: calc(100vh - 80px);
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    min-height: unset;
    padding: 0 1.5rem;
  }
`;
export const SectionRow = styled.div<GridProps>`
  display: grid;
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
  margin: 0 auto 1rem;
  padding: 0 1rem;
`;
export const Column2 = styled.div`
  grid-area: col2;
  margin: 0 auto 1rem;
  padding: 0 1rem;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (min-width: 768px) {
    padding-bottom: 0;
  }
`;
export const TopLine = styled.h6`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.1;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;
export const HeadLine = styled.h1`
  ${Heading}
`;
export const Subtitle = styled.p`
  ${Text}
  max-width: 440px;
  color: ${({ theme }) => theme.textSecondary};
`;
export const BtnWrap = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;
export const Img = styled.img<ImgProps>`
  max-width: 320px;
  margin: auto;
  border-radius: ${({ isCircular }) => (isCircular ? '50%' : '')};
  filter: grayscale(25%);
  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
`;
