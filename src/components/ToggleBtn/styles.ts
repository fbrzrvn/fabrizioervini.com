import styled, { css, keyframes } from 'styled-components';

type ToggleThemeBtnProps = {
  isAnimated: boolean;
  isDark: boolean;
};

const darkIcon = 'svg/moon.svg';
const lightIcon = 'svg/sun.svg';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-opacity: opacity(0);
    -moz-opacity: opacity(0);
  }
  50% {
    opacity: 0.5;
    -webkit-opacity: opacity(0.5);
    -moz-opacity: opacity(0.5);
  }
  100% {
    transform: rotate(360deg);
    opacity: 1;
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-opacity: opacity(1);
    -moz-opacity: opacity(1);
  }
`;

export const ToggleThemeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ToggleThemeBtn = styled.button<ToggleThemeBtnProps>`
  height: 24px;
  width: 24px;
  border: none;
  background-color: transparent;
  background-image: url(${({ isDark }) => (isDark ? lightIcon : darkIcon)});
  background-position: center;
  background-size: 24px;
  cursor: pointer;
  animation: ${({ isAnimated }) =>
    isAnimated &&
    css`
      ${spin} 500ms ease-in-out alternate
    `};
`;
