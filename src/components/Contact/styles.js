import styled from 'styled-components';
import { COLOR } from '../../styles/colors';

export const ContactContainer = styled.div`
  background: ${({ theme }) => theme.navbarBg};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const ContactContent = styled.div`
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactH1 = styled.h1`
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

export const ContactP = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ContactBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;
