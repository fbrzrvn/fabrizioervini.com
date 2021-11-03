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
