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
  position: relative;
  z-index: 1;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0% rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0% transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  overflow: hidden;
`;

export const MediaBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: center;
  background: ${({ theme }) => theme.body};
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
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
  border: 1px solid #d4d5d8;
  background: #ebedf0;
  color: #1c1e21;
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
    transition: all 300ms ease-in-out;
    background: #e3e6e8;
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
