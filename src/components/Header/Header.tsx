import React from 'react';
import ROUTES from '../../routes';
import useScroll from '../../utils/useScroll';
import useTranslation from '../../utils/useTranslation';
import Select from '../Select';
import { Nav, NavContainer, NavLogo } from './styles';

const Header = () => {
  const isScrolled = useScroll();
  const { t } = useTranslation();

  return (
    <Nav scrollNav={isScrolled}>
      <NavContainer>
        <NavLogo to={ROUTES.HOME}>faber</NavLogo>
        <Select t={t} />
      </NavContainer>
    </Nav>
  );
};

export default Header;
