import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { footerLinks } from 'data/links';
import { RoutesType } from 'models/enums';
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterCopy,
  FooterIconLink,
  FooterIcons,
  FooterLogo,
  FooterWrapper,
} from './styles';

const Footer = () => {
  const backToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogo to={RoutesType.HOME} onClick={backToTop}>
          faber
        </FooterLogo>
        <FooterCopy>© faber 2021 All rights are reserved.</FooterCopy>
        <FooterIcons>
          {footerLinks.map((link) => (
            <FooterIconLink
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <FontAwesomeIcon icon={link.icon} />
            </FooterIconLink>
          ))}
        </FooterIcons>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
