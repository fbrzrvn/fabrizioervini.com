import React from 'react';
import ROUTES from '../../routes';
import useScroll from '../../utils/useScroll';
import { Nav, NavContainer, NavLogo } from './styles';

const Header = () => {
  const scrollNav = useScroll();

  return (
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <NavLogo to={ROUTES.HOME}>faber</NavLogo>
      </NavContainer>
    </Nav>
  );
};

export default Header;
