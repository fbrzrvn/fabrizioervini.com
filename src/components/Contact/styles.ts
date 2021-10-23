import styled from 'styled-components';
import { Container, Content, Heading, Text } from 'styles/mixins';

export const ContactContainer = styled.div`
  ${Container}
  min-height: 100vh;
  background: ${({ theme }) => theme.navbarBg};
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 184px);
  }
`;
export const ContactContent = styled.div`
  ${Content}
`;
export const ContactH1 = styled.h1`
  ${Heading}
`;
export const ContactP = styled.p`
  ${Text}
  max-width: 600px;
  color: ${({ theme }) => theme.textSecondary};
`;
export const ContactBtn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  width: 180px;
`;
