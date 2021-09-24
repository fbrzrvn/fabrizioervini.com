import styled from 'styled-components';
import { COLOR } from '../../styles/colors';

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 30px;
  background: ${({ theme }) => theme.navbarBg};
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  padding: 8px 24px;
`;

export const ContactH1 = styled.h1`
  margin-bottom: 24px;
  background: ${COLOR.linearGradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 32px;
  text-align: center;
  @media screen and (min-width: 480px) {
    font-size: 48px;
  }
`;

export const ContactP = styled.p`
  max-width: 600px;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 18px;
  text-align: center;
  @media screen and (min-width: 480px) {
    font-size: 24px;
  }
`;

export const ContactBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;
