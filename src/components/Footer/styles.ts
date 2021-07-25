import { Link as LinkRouter } from 'react-scroll';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  background: ${({ theme }) => theme.footer};
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 24px;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinks = styled.section`
  max-width: 1100px;
  width: 100%;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLogo = styled(LinkRouter)`
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  @media screen and (max-width: 820px) {
    margin-bottom: 16px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const FooterCopy = styled.small`
  color: ${({ theme }) => theme.textSecondary};
  @media screen and (max-width: 820px) {
    order: 3;
    text-align: center;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  @media screen and (max-width: 820px) {
    order: 2;
    margin-bottom: 16px;
  }
  @media screen and (max-width: 768px) {
    margin: 8px auto;
  }
  @media screen and (max-width: 304px) {
    width: 100%;
  }
`;

export const FooterIconLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3 ease-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
    transition: all 0.3 ease-out;
  }
`;
