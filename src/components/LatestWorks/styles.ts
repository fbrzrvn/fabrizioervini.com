import styled from 'styled-components';
import { COLOR } from 'styles/colors';
import {
  Container,
  Content,
  Heading,
  Link,
  Text,
  TextSmall,
} from 'styles/mixins';

export const LatestWorksContainer = styled.section`
  ${Container}
  min-height: calc(100vh - 80px);
  background: ${({ theme }) => theme.navbarBg};
`;
export const LatestWorksContent = styled.div`
  ${Content}
  width: 100%;
  max-width: 1100px;
  @media screen and (min-width: 768px) {
    padding: 0 3rem;
  }
`;
export const LatestWorksH1 = styled.h1`
  ${Heading}
`;
export const LatestWorksP = styled.p`
  ${Text};
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
`;
export const LatestWorksLink = styled.a`
  ${Link}
`;
export const LatestWorksCard = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  margin: 2.5rem auto 0;
  border-radius: 4px;
  border: 1px solid ${COLOR.gris300};
  box-shadow: rgb(48 76 112 / 25%) 0px 3px 10px;
  transition: all 300ms ease-in-out;
  &:hover {
    box-shadow: rgb(48 76 112 / 25%) 0 0 10px;
  }
  @media screen and (min-width: 678px) {
    flex-direction: row;
    max-width: unset;
  }
`;
export const LatestWorksCardImg = styled.img`
  border-radius: 4px 4px 0 0;
  @media screen and (min-width: 678px) {
    max-height: 213px;
    border-radius: 4px 0 0 4px;
  }
`;
export const LatestWorksCardBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media screen and (min-width: 678px) {
    padding: 0 0.5rem 0.5rem 1rem;
  }
  @media screen and (min-width: 980px) {
    padding: 0 1rem 1rem;
  }
`;
export const LatestWorksCardH2 = styled.h2`
  margin: 0.625rem 0;
  color: ${({ theme }) => theme.primary};
  font-size: 1.8rem;
`;
export const LatestWorksCardP = styled.p`
  ${TextSmall};
  width: 90%;
  margin-bottom: 1rem;
  color: ${COLOR.gris900};
`;
