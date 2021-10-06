import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll';
import { links } from '../../data/links';
import useScroll from '../../hooks/useScroll';
import { NavProps, TranslateProps } from '../../models/props';
import ROUTES from '../../routes';
import Select from '../Select';
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

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrollNav={isScrolled}>
      <NavContainer>
        {hasLink && (
          <MobileIcon onClick={setIsOpen}>
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </MobileIcon>
        )}
        <NavLogo to={ROUTES.HOME} onClick={toggleHome}>
          faber
        </NavLogo>
        {hasLink && (
          <NavMenu>
            {links.map(link => (
              <NavItem key={link.id}>
                <NavLink to={link.url} smooth duration={500} spy offset={-80}>
                  {t(link.label)}
                </NavLink>
              </NavItem>
            ))}
          </NavMenu>
        )}
        <NavBtns>
          <Select t={t} />
          <ToggleBtn />
        </NavBtns>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
