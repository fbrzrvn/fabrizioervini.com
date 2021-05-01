import React from 'react';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll';
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
            <FooterLogo to="/" onClick={toggleHome}>
              faber
            </FooterLogo>
            <FooterCopy>© faber 2021 All rights are reserved.</FooterCopy>
            <FooterIcons>
              <FooterIconLink
                href="https://github.com/fab-rvn"
                target="blank"
                aria-label="GitHub"
              >
                <AiOutlineGithub />
              </FooterIconLink>
              <FooterIconLink
                href="https://www.linkedin.com/in/fabrizio-ervini-a9557356/"
                target="blank"
                aria-label="LinkedIn"
              >
                <AiFillLinkedin />
              </FooterIconLink>
              <FooterIconLink
                href="https://twitter.com/faber_dev"
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
