import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';
import { COLOR } from '../../styles/colors';

type NavbarProps = {
  scrollNav: Boolean;
};

export const Nav = styled.nav<NavbarProps>`
  background: ${({ scrollNav, theme }) =>
    scrollNav ? theme.navbarBg : 'transparent'};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 968px) {
    transition: all 800ms ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  max-width: 1100px;
  z-index: 1;
`;

export const NavLogo = styled(LinkRouter)`
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-self: flex-start;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  margin-left: 24px;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkScroll)`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
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

export const NavLinkRouter = styled(LinkRouter)`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.navbarLink};
    transition: all 300ms ease-in-out;
  }
  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.navbarLink};
  }
`;
