import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { footerLinks } from 'data/links';
import { RoutesType } from 'models/enums';
import Link from 'next/link';
import React from 'react';
import { scrollToTop } from 'utils';
import {
  FooterContainer,
  FooterCopy,
  FooterIconLink,
  FooterIcons,
  FooterLogo,
  FooterWrapper,
} from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Link href={RoutesType.HOME} passHref>
          <FooterLogo onClick={scrollToTop}>faber</FooterLogo>
        </Link>
        <FooterCopy>© faber 2021 All rights are reserved.</FooterCopy>
        <FooterIcons>
          {footerLinks.map((link) => (
            <FooterIconLink
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={`Link to ${link.url}`}
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
