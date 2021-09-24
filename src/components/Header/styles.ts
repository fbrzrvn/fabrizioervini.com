import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';

type HeaderProps = {
  scrollNav: boolean;
};

export const Nav = styled.nav<HeaderProps>`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background: ${({ scrollNav, theme }) =>
    scrollNav ? theme.navbarBg : 'transparent'};
  font-size: 1rem;
  z-index: 10;
  transition: all 0.8s ease;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkRouter)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  margin-left: 24px;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
`;
