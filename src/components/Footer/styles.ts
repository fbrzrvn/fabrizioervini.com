import { Link as LinkRouter } from 'react-scroll';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  background: ${({ theme }) => theme.footer};
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
  @media screen and (min-width: 768px) {
    padding: 40px 24px;
  }
`;

export const FooterLinks = styled.section`
  width: 100%;
  max-width: 1100px;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 1100px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterLogo = styled(LinkRouter)`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  & span {
    width: 168px;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    & span {
      text-align: left;
    }
  }
`;

export const FooterCopy = styled.small`
  order: 3;
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
  @media screen and (min-width: 768px) {
    order: initial;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;
  width: 100%;
  margin: 0 auto 16px;
  @media screen and (min-width: 768px) {
    order: initial;
    width: unset;
    margin: initial;
  }
`;

export const FooterIconLink = styled.a`
  padding: 0 16px;
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3 ease-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
    transition: all 0.3 ease-out;
  }
`;
