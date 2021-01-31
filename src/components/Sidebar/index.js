import React from 'react';
import BtnLink from '../BtnLink';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtn } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="portfolio" onClick={toggle}>Portfolio</SidebarLink>
          <SidebarLink to="blog" onClick={toggle}>Blog</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
        <SidebarBtn>
          <BtnLink to="/contact"
            dark="true"
            primary="true"
          >Contact Me</BtnLink>
        </SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
