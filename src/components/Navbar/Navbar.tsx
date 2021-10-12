import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { links } from 'data/links';
import { useScroll } from 'hooks';
import { RoutesType } from 'models/enums';
import { NavProps, TranslateProps } from 'models/props';
import Link from 'next/link';
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Culture from '../Culture';
import ToggleBtn from '../ToggleBtn';
import {
  MobileIcon,
  Nav,
  NavBtns,
  NavContainer,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from './styles';

const Navbar = ({
  isOpen,
  setIsOpen,
  hasLink,
  t,
}: NavProps & TranslateProps) => {
  const isScrolled = useScroll();

  const backToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrollNav={isScrolled} isOpen={isOpen}>
      <NavContainer>
        {hasLink && (
          <MobileIcon onClick={setIsOpen}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </MobileIcon>
        )}
        <Link href={RoutesType.HOME}>
          <NavLogo onClick={backToTop}>faber</NavLogo>
        </Link>
        {hasLink && (
          <NavMenu>
            {links.map((link) => (
              <NavItem key={link.id}>
                <NavLink to={link.url} smooth duration={500} spy offset={-80}>
                  {t(link.label)}
                </NavLink>
              </NavItem>
            ))}
          </NavMenu>
        )}
        <NavBtns>
          <ToggleBtn />
          <Culture t={t} />
        </NavBtns>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
