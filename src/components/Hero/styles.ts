import { AiOutlineArrowRight, AiOutlineRight } from 'react-icons/ai';
import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';
import { COLOR } from '../../styles/colors';

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.footer};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  background: ${COLOR.linearGradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 48px;
  text-align: center;
  margin-bottom: 24px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const HeroBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;

export const Button = styled(LinkScroll)`
  border-radius: 50px;
  background: ${COLOR.btnPrimary};
  color: ${COLOR.btnPrimaryColor};
  padding: 12px 30px;
  white-space: nowrap;
  font-size: 1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  outline: none;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    background: ${COLOR.btnPrimaryHover};
    transition: all 300ms ease-in-out;
  }
`;

export const ArrowForward = styled(AiOutlineArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(AiOutlineRight)`
  margin-left: 8px;
  font-size: 20px;
`;
