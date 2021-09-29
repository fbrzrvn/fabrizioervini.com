import React from 'react';
import { links } from '../../data/links';
import { NavProps } from '../../models/props';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from './styles';

const Sidebar = ({ toggleNavbar, isOpen }: NavProps) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={() => toggleNavbar()}>
      <Icon onClick={() => toggleNavbar()}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {links.map(link => (
            <SidebarLink
              key={link.id}
              to={link.url}
              onClick={() => toggleNavbar()}
            >
              {link.label}
            </SidebarLink>
          ))}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
