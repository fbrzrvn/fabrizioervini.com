import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const FooterContainer = styled.div`
  background: #101522;
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

export const FooterLogo = styled(LinkScroll)`
  color: #fff;
  dipslay: flex;
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
  color: #fff;
  @media screen and (max-width: 820px) {
    margin-bottom: 16px;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const FooterIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  transition: all .3 ease-out;
  &:hover {
    color: #61dafb;
    transition: all .3 ease-out;
  }
`;