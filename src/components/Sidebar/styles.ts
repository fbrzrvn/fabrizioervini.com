import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';

type SidebarProps = {
  isOpen: boolean;
};

export const SidebarContainer = styled.aside<SidebarProps>`
  position: fixed;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  top: 80px;
  z-index: 1;
  display: grid;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.body};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: all 500ms ease-in-out;
`;
export const SidebarWrapper = styled.div`
  color: ${({ theme }) => theme.text};
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 60px);
  text-align: center;
  padding-top: 60px;
`;
export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.navbarLink};
    transition: all 300ms ease-in-out;
  }
`;
