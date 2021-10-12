import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { COLOR } from 'styles/colors';

export const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 100px 24px;
  background: ${({ theme }) => theme.navbarBg};
`;
export const WorkH1 = styled.h1`
  margin-bottom: 64px;
  background: ${COLOR.linearGradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  text-align: center;
  @media screen and (min-width: 480px) {
    font-size: 2.5rem;
  }
`;

/*****************
  CAROUSEL
******************/
export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  overflow: hidden;
  scroll-behavior: smooth;
`;
const ArrowIcon = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: none;
  width: 44px !important;
  height: 44px;
  padding: 6px 6px 6px 4px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  z-index: 5;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
export const ArrowIconLeft = styled(FontAwesomeIcon)`
  ${ArrowIcon};
  left: 0;
  padding: 6px 6px 6px 4px;
`;
export const ArrowIconRight = styled(FontAwesomeIcon)`
  ${ArrowIcon};
  right: 0;
  padding: 6px 4px 6px 6px;
`;
export const CarouselWrapper = styled.div`
  display: flex;
  transform: translateX(0%);
  transition: transform 800ms ease-in-out;
`;
export const DotsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 64px;
`;
export const Dots = styled.button<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border: none;
  border-radius: 50%;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.primary : theme.textSecondary};
  cursor: pointer;
`;

/****************
  WORK CARD
****************/
export const WorkCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 100%;
  width: 100%;
  border-radius: 10px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
  }
`;
export const WorkImg = styled.img`
  margin: auto;
  height: 100%;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 10px 10px 0 0;
  @media screen and (min-width: 768px) {
    width: 80%;
    height: 300px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 500px;
    height: 400px;
    margin-left: 60px;
    margin-bottom: 0;
    border-radius: 10px 0 0 10px;
  }
`;
export const WorkInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 24px 32px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  @media screen and (min-width: 768px) {
    width: 80%;
    margin: auto;
  }
  @media screen and (min-width: 1024px) {
    align-items: center;
    justify-content: center;
    margin: initial;
    margin-right: 60px;
    padding: 0;
    border-radius: 0 10px 10px 0;
  }
`;
export const WorkH2 = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;
export const WorkP = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 24px;
  color: ${COLOR.btnPrimaryColor};
  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  margin: 8px 0;
  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;
export const BtnLink = styled.a`
  padding: 12px 30px;
  white-space: nowrap;
  color: ${COLOR.btnPrimaryColor};
  background: ${COLOR.btnPrimary};
  border-radius: 50px;
  font-family: inherit;
  font-size: 18px;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    background: ${COLOR.btnPrimaryHover};
    transition: all 200ms ease-in-out;
  }
`;
