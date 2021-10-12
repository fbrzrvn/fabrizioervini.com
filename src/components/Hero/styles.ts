import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';
import { COLOR } from 'styles/colors';

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 30px;
  background: ${({ theme }) => theme.footer};
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  padding: 8px 24px;
`;

export const HeroH1 = styled.h1`
  margin-bottom: 24px;
  background: ${COLOR.linearGradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 32px;
  text-align: center;
  white-space: nowrap;
  @media screen and (min-width: 480px) {
    font-size: 48px;
  }
`;

export const HeroP = styled.p`
  max-width: 600px;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  text-align: center;
  @media screen and (min-width: 480px) {
    font-size: 24px;
  }
`;

export const HeroBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;

export const Button = styled(LinkScroll)`
  display: flex;
  align-items: center;
  padding: 12px 30px;
  border-radius: 50px;
  background: ${COLOR.btnPrimary};
  color: ${COLOR.btnPrimaryColor};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    transition: all 300ms ease-in-out;
  }
`;

export const ArrowIcon = styled(FontAwesomeIcon)`
  margin-left: 8px;
  font-size: 20px;
`;
