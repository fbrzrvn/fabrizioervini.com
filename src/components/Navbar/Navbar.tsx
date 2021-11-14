import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavLinks from 'components/NavLinks';
import { useIsMobileDevice, useScroll } from 'hooks';
import { RoutesType } from 'models/enums';
import { NavProps, TranslateProps } from 'models/props';
import Link from 'next/link';
import React from 'react';
import { scrollToTop } from 'utils';
import Culture from '../Culture';
import { MobileIcon, Nav, NavContainer, NavLogo } from './styles';

const Navbar = ({ isOpen, setIsOpen, t }: NavProps & TranslateProps) => {
  const isScrolled = useScroll();
  const { isSmallMobileDevice } = useIsMobileDevice();

  return (
    <Nav
      scrollNav={isScrolled}
      isOpen={isOpen}
      isSmallMobileDevice={isSmallMobileDevice}
    >
      <NavContainer>
        <MobileIcon onClick={setIsOpen}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </MobileIcon>
        <Link href={RoutesType.HOME}>
          <NavLogo onClick={scrollToTop}>faber</NavLogo>
        </Link>
        <NavLinks t={t} />
        <Culture t={t} />
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
