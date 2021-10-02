import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll';
import { links } from '../../data/links';
import { NavProps, TranslateProps } from '../../models/props';
import ROUTES from '../../routes';
import useScroll from '../../utils/useScroll';
import Select from '../Select';
import {
  MobileIcon,
  Nav,
  NavContainer,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from './styles';

const Navbar = ({ toggleNavbar, t }: NavProps & TranslateProps) => {
  const isScrolled = useScroll();

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrollNav={isScrolled}>
      <NavContainer>
        <MobileIcon onClick={() => toggleNavbar()}>
          <AiOutlineMenu />
        </MobileIcon>
        <NavLogo to={ROUTES.HOME} onClick={toggleHome}>
          faber
        </NavLogo>
        <NavMenu>
          {links.map(link => (
            <NavItem key={link.id}>
              <NavLink to={link.url} smooth duration={500} spy offset={-80}>
                {t(link.label)}
              </NavLink>
            </NavItem>
          ))}
        </NavMenu>
        <Select t={t} />
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
