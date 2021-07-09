import React from 'react';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll';
import * as ROUTES from '../../routes';
import {
  FooterContainer,
  FooterCopy,
  FooterIconLink,
  FooterIcons,
  FooterLinks,
  FooterLinksWrapper,
  FooterLogo,
  FooterWrapper,
} from './styles';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinks>
          <FooterLinksWrapper>
            <FooterLogo to={ROUTES.HOME} onClick={toggleHome}>
              faber
            </FooterLogo>
            <FooterCopy>© faber 2021 All rights are reserved.</FooterCopy>
            <FooterIcons>
              <FooterIconLink
                href={ROUTES.GITHUB}
                target="blank"
                aria-label="GitHub"
              >
                <AiOutlineGithub />
              </FooterIconLink>
              <FooterIconLink
                href={ROUTES.LINKEDIN}
                target="blank"
                aria-label="LinkedIn"
              >
                <AiFillLinkedin />
              </FooterIconLink>
              <FooterIconLink
                href={ROUTES.TWITTER}
                target="blank"
                aria-label="Twitter"
              >
                <AiOutlineTwitter />
              </FooterIconLink>
            </FooterIcons>
          </FooterLinksWrapper>
        </FooterLinks>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
