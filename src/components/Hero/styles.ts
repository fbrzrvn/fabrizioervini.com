import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';
import { COLOR } from 'styles/colors';
import { Heading, Text } from 'styles/mixins';

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 16px;
  background: ${({ theme }) => theme.footer};
  text-align: left;
  @media screen and (min-width: 768px) {
    padding: 0 30px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  @media screen and (min-width: 768px) {
    padding: 8px 24px;
  }
`;

export const HeroH1 = styled.h1`
  ${Heading}
`;

export const HeroP = styled.p`
  ${Text};
  max-width: 600px;
  color: ${({ theme }) => theme.text};
`;

export const HeroBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 32px;
`;

export const Button = styled(LinkScroll)`
  display: flex;
  align-items: center;
  padding: 12px 30px;
  border-radius: 50px;
  background-image: ${COLOR.btnPrimary};
  color: ${COLOR.btnPrimaryColor};
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    background-image: ${COLOR.btnPrimaryHover};
    transition: all 300ms ease-in-out;
  }
`;

export const ArrowIcon = styled(FontAwesomeIcon)`
  margin-left: 8px;
  font-size: 20px;
`;
