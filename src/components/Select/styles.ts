import { AiOutlineCheck, AiOutlineDown } from 'react-icons/ai';
import styled from 'styled-components';
import { COLOR } from '../../styles/colors';

type ArrowProps = {
  isOpen: boolean;
};

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const LanguageImg = styled.img`
  height: 18px;
  width: 18px;
`;
export const LanguageLabel = styled.span`
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
export const LanguageArrowBtn = styled(CustomBtn)`
  height: 24px;
  width: 24px;
`;
export const LanguageArrowIcon = styled(AiOutlineDown)<ArrowProps>`
  transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
  transition: transform 200ms ease-in-out;
`;
export const LanguagesOptionBox = styled.div<{ isOpen: boolean }>`
  position: absolute;
  right: 0;
  top: 26px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  width: 150px;
  border-radius: 4px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.navbarBg};
`;
export const LanguagesOptionBtns = styled(CustomBtn)`
  height: 45px;
  width: 100%;
  padding: 0 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;
export const LanguagesOptionLabel = styled.span`
  margin: 0 6px;
`;
export const LanguageOptionChecked = styled(AiOutlineCheck)`
  margin-left: 16px;
  color: ${COLOR.success500};
`;
