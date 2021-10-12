import { links } from 'data/links';
import { NavProps, TranslateProps } from 'models/props';
import React from 'react';
import {
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from './styles';

const Sidebar = ({ setIsOpen, isOpen, t }: NavProps & TranslateProps) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={setIsOpen}>
      <SidebarWrapper>
        <SidebarMenu>
          {links.map((link) => (
            <SidebarLink key={link.id} to={link.url} onClick={setIsOpen}>
              {t(link.label)}
            </SidebarLink>
          ))}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
