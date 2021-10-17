import styled from 'styled-components';
import { Heading } from 'styles/globals';

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 16px;
  background: ${({ theme }) => theme.navbarBg};
  text-align: left;
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 184px);
    padding: 0 30px;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  @media screen and (min-width: 768px) {
    padding: 8px 24px;
  }
`;

export const ContactH1 = styled.h1`
  ${Heading}
`;

export const ContactP = styled.p`
  max-width: 600px;
  color: ${({ theme }) => theme.textSecondary};
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const ContactBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;
