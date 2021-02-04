import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrapper,
  FooterLinks,
  FooterLinksWrapper,
  FooterLogo,
  FooterCopy,
  FooterIcons,
  FooterIconLink } from './FooterElements';

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinks>
          <FooterLinksWrapper>
            <FooterLogo to="home" onClick={toggleHome}>faber</FooterLogo>
            <FooterCopy>© faber 2021 All rights are reserved.</FooterCopy>
            <FooterIcons>
              <FooterIconLink href="https://github.com/fab-rvn" target="_blank" aria-label="GitHub">
                <FaGithub />
              </FooterIconLink>
              <FooterIconLink href="https://www.linkedin.com/in/fabrizio-ervini-a9557356/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </FooterIconLink>
              <FooterIconLink href="https://twitter.com/faber_dev" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </FooterIconLink>
            </FooterIcons>
          </FooterLinksWrapper>
        </FooterLinks>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer;
