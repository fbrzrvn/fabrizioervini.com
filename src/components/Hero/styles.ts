import styled from 'styled-components';
import { Container, Content, Heading, Text } from 'styles/mixins';

export const HeroContainer = styled.section`
  ${Container}
  min-height: calc(100vh - 80px);
  background: ${({ theme }) => theme.navbarBg};
`;
export const HeroContent = styled.div`
  ${Content}
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
  margin-top: 2rem;
`;
