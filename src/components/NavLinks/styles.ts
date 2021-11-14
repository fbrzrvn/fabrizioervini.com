import styled from 'styled-components';
import { COLOR } from 'styles/colors';

type NavLinksProps = {
  isSidebar?: boolean;
  isActive?: boolean;
};

export const NavLinksList = styled.ul<NavLinksProps>`
  display: flex;
  align-items: center;
  margin: ${({ isSidebar }) => (isSidebar ? '1.5rem 0' : '0 1.5rem 0 0')};
  list-style: none;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: ${({ isSidebar }) => !isSidebar && 'none'};
    flex-direction: ${({ isSidebar }) => isSidebar && 'column'};
  }
`;
export const NavLinksListItem = styled.li`
  height: 80px;
`;
export const NavLink = styled.a<NavLinksProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ isSidebar }) => isSidebar && 'center'};
  height: 100%;
  padding: 0 1rem;
  border-bottom: 3px solid transparent;
  background: ${({ isActive }) => isActive && COLOR.headingGradient};
  background-repeat: ${({ isActive }) => isActive && 'no-repeat'};
  background-position: ${({ isActive }) => isActive && 'bottom'};
  background-size: ${({ isActive }) => isActive && '100% 3px'};
  background-clip: ${({ isActive }) => isActive && 'border-box'};
  background-origin: ${({ isActive }) => isActive && 'border-box'};
  -webkit-background-clip: ${({ isActive }) => isActive && 'border-box'};
  color: ${({ theme }) => theme.text};
  font-weight: ${({ isActive }) => isActive && '700'};
  font-size: 1.125rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover:not(.active) {
    color: ${({ theme, isActive }) => !isActive && theme.navbarLink};
  }
  &.active {
    background: ${COLOR.headingGradient};
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100% 3px;
    background-clip: border-box;
    background-origin: border-box;
    -webkit-background-clip: border-box;
    font-weight: 700;
  }
`;
