import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import styled, { css } from 'styled-components';
import { COLOR } from '../../styles/colors';

export const WorkContainer = styled.div`
  background: ${({ theme }) => theme.navbarBg};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 24px;
  @media screen and (max-width: 768px) {
    min-height: 1100px;
  }
  @media screen and (max-width: 480px) {
    min-height: 1300px;
  }
`;

export const WorkH1 = styled.h1`
  background: ${COLOR.linearGradient};
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 2.5rem;
  text-align: center;
  -webkit-text-fill-color: transparent;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
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
  width: 44px;
  height: 44px;
  padding: 6px 6px 6px 4px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  z-index: 5;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;
export const ArrowIconLeft = styled(AiOutlineLeft)`
  ${ArrowIcon};
  left: 8px;
  padding: 6px 6px 6px 4px;
`;
export const ArrowIconRight = styled(AiOutlineRight)`
  ${ArrowIcon};
  right: 8px;
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
  aspect-ratio: 16/9;
  width: 100%;
  height: 300px;
  margin: auto;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
  @media screen and (min-width: 1024px) {
    max-width: 450px;
    margin-left: 60px;
    margin-bottom: 0;
  }
`;

export const WorkInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0 0;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
  @media screen and (min-width: 1024px) {
    padding: 24px;
  }
`;

export const WorkH2 = styled.h2`
  width: 90%;
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
`;

export const WorkP = styled.p`
  margin-bottom: 10px;
  font-size: 1rem;
  line-height: 20px;
  color: ${({ theme }) => theme.text};
  @media screen and (min-width: 1024px) {
    width: 90%;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 24px;
`;

export const BtnLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  padding: 12px 30px;
  font-size: 16px;
  white-space: nowrap;
  color: ${COLOR.btnPrimaryColor};
  background: ${COLOR.btnPrimary};
  border-radius: 50px;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    background: ${COLOR.btnPrimaryHover};
    transition: all 200ms ease-in-out;
  }
  @media screen and (min-width: 1024px) {
    width: 90%;
  }
`;
