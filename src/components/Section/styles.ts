import styled from 'styled-components';
import { COLOR } from 'styles/colors';

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
  justify-content: center;
  min-height: calc(100vh - 80px);
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
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

export const Heading = styled.h1`
  margin-bottom: 24px;
  background: ${COLOR.linearGradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1;
  @media screen and (min-width: 480px) {
    font-size: 48px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 18px;
  line-height: 24px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const BtnLink = styled.button`
  display: grid;
  place-items: center;
  width: 160px;
  padding: 12px 30px;
  border-radius: 50px;
  border: none;
  background: ${COLOR.btnPrimary};
  color: ${COLOR.btnPrimaryColor};
  font-family: inherit;
  font-size: 18px;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    background-image: ${COLOR.btnPrimaryHover};
    transition: all 200ms ease-in-out;
  }
`;

export const ImgWrap = styled.div`
  height: 100%;
  max-width: 555px;
`;

export const Img = styled.img<ImgProps>`
  display: block;
  width: 60%;
  margin: auto;
  padding-right: 0;
  border-radius: ${({ isCircular }) => (isCircular ? '50%' : '')};
  filter: grayscale(25%);
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
