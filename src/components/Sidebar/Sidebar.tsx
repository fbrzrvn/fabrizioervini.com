import React from 'react';
import { links } from '../../data/links';
import { NavProps, TranslateProps } from '../../models/props';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from './styles';

const Sidebar = ({ toggleNavbar, isOpen, t }: NavProps & TranslateProps) => {
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
              {t(link.label)}
            </SidebarLink>
          ))}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
