import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  background: #0d0d0d;
  display: grid;
  align-items: center;
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: all .3 ease-in-out;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  background: transparent;
  outline: none;
  cursor: pointer;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;
  @media screen and(max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: all .3 ease-in-out;
  &:hover {
    color: #61dafb;
    transition: all .3 ease-in-out;
  }
`;

export const SidebarBtn = styled.div`
  display: flex;
  justify-content: center;
`;