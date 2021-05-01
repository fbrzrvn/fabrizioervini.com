import { bool, func } from 'prop-types';
import React from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from './styles';

const Sidebar = ({ toggleNavbar, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleNavbar}>
      <Icon onClick={toggleNavbar}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggleNavbar}>
            About
          </SidebarLink>
          <SidebarLink to="work" onClick={toggleNavbar}>
            Work
          </SidebarLink>
          <SidebarLink to="blog" onClick={toggleNavbar}>
            Blog
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggleNavbar}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  toggleNavbar: func.isRequired,
  isOpen: bool.isRequired,
};

export default Sidebar;
