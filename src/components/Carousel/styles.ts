import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { COLOR } from 'styles/colors';

export const CarouselContainer = styled.div`
  width: 100%;

  overflow: hidden;
  scroll-behavior: smooth;
  @media screen and (min-width: 580px) {
    max-width: 90%;
    margin: auto;
  }
`;
const ArrowIcon = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: none;
  width: 44px !important;
  height: 44px;
  padding: 6px 6px 6px 4px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  color: ${COLOR.white};
  z-index: 5;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
export const ArrowIconLeft = styled(FontAwesomeIcon)`
  ${ArrowIcon};
  left: 0;
  padding: 6px 6px 6px 4px;
`;
export const ArrowIconRight = styled(FontAwesomeIcon)`
  ${ArrowIcon};
  right: 0;
  padding: 6px 4px 6px 6px;
`;
export const CarouselWrapper = styled.div`
  display: flex;
  transform: translateX(0%);
  transition: transform 800ms ease-in-out;
`;
export const DotsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 64px;
`;
export const Dots = styled.button<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border: none;
  border-radius: 50%;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.primary : theme.textSecondary};
  cursor: pointer;
`;
