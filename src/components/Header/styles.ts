import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';

interface HeaderProps {
  scrollNav: boolean;
}

export const Nav = styled.nav<HeaderProps>`
  background: ${({ scrollNav, theme }) =>
    scrollNav ? theme.navbarBg : 'transparent'};
  background: ${({ theme }) => theme.navbarBg};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 968px) {
    transition: all 0.8s ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
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
