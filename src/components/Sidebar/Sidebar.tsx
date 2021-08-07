import React from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from './styles';

type SidebarProps = {
  toggleNavbar: boolean | any;
  isOpen: boolean;
};

const Sidebar = ({ toggleNavbar, isOpen }: SidebarProps) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={() => toggleNavbar()}>
      <Icon onClick={() => toggleNavbar()}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={() => toggleNavbar()}>
            About
          </SidebarLink>
          <SidebarLink to="work" onClick={() => toggleNavbar()}>
            Work
          </SidebarLink>
          <SidebarLink to="blog" onClick={() => toggleNavbar()}>
            Blog
          </SidebarLink>
          <SidebarLink to="contact" onClick={() => toggleNavbar()}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
