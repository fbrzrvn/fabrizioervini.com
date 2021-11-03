import styled from 'styled-components';

type NavbarProps = {
  scrollNav: boolean;
  isOpen: boolean;
  isSmallMobileDevice: boolean;
};

export const Nav = styled.nav<NavbarProps>`
  position: ${({ isSmallMobileDevice }) => !isSmallMobileDevice && 'sticky;'};
  top: ${({ isSmallMobileDevice }) => !isSmallMobileDevice && '0'};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  box-shadow: ${({ scrollNav, isSmallMobileDevice }) =>
    scrollNav && !isSmallMobileDevice
      ? '0 0 10px 0 rgba(0, 0, 0, 0.3)'
      : 'none'};
  background: ${({ isOpen, scrollNav, theme, isSmallMobileDevice }) =>
    isOpen
      ? theme.body
      : scrollNav && !isSmallMobileDevice
      ? theme.navbarBg
      : 'transparent'};
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
  padding: 1rem;
  @media screen and (min-width: 768px) {
    padding: 0 2rem;
  }
`;
export const NavLogo = styled.p`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  color: ${({ theme }) => theme.text};
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-left: 1rem;
  }
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
export const NavBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100px;
`;
