import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { COLOR } from 'styles/colors';

export const CultureWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const CultureImg = styled.img`
  height: 20px;
  width: 20px;
`;
export const CultureLabel = styled.span`
  width: 20px;
  margin: 0 6px;
  font-size: inherit;
  text-transform: uppercase;
`;
const CustomBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
`;
export const CultureArrowBtn = styled(CustomBtn)`
  height: 24px;
  margin-left: 8px;
`;
export const CultureArrowIcon = styled(FontAwesomeIcon)<{ isopen: string }>`
  transform: rotate(${({ isopen }) => (isopen === 'true' ? '180deg' : '0deg')});
  transition: transform 200ms ease-in-out;
`;
export const CultureOptionsBox = styled.div<{ isopen: boolean }>`
  position: absolute;
  right: 0;
  top: 26px;
  display: ${({ isopen }) => (isopen ? 'block' : 'none')};
  width: 150px;
  border-radius: 4px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.navbarBg};
`;
export const CultureOptionsBtn = styled(CustomBtn)`
  height: 45px;
  width: 100%;
  padding: 0 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;
export const CultureOptionsLabel = styled.span`
  margin: 0 6px;
`;
export const CultureChecked = styled(FontAwesomeIcon)`
  margin-left: 16px;
  color: ${COLOR.success500};
`;
