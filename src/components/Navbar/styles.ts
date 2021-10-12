import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';
import { COLOR } from 'styles/colors';

type NavbarProps = {
  scrollNav: Boolean;
  isOpen: boolean;
};

export const Nav = styled.nav<NavbarProps>`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  margin-top: -80px;
  background: ${({ isOpen, scrollNav, theme }) =>
    isOpen ? theme.body : scrollNav ? theme.navbarBg : 'transparent'};
  z-index: 10;
  transition: ${({ isOpen }) => isOpen && 'all 1s ease-in-out'};
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  max-width: 1100px;
  padding: 0 2rem;
`;

export const NavLogo = styled.p`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  margin-left: 24px;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 28px;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 24px;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.navbarLink};
  }
  &.active {
    border-bottom: 3px solid transparent;
    background: ${COLOR.linearGradient};
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100% 3px;
    background-clip: border-box;
    background-origin: border-box;
    -webkit-background-clip: border-box;
  }
`;

export const NavBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100px;
`;
