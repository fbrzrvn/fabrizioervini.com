import NavLinks from 'components/NavLinks';
import { NavProps, TranslateProps } from 'models/props';
import React from 'react';
import { SidebarContainer, SidebarWrapper } from './styles';

const Sidebar = ({ isOpen, setIsOpen, t }: NavProps & TranslateProps) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={setIsOpen}>
      <SidebarWrapper>
        <NavLinks t={t} isSidebar />
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
