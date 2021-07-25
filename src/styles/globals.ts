import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { COLOR } from './colors';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 18px;
    line-height: 1;
    transition: all 1s ease;
 }
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export const lightTheme: DefaultTheme = {
  body: COLOR.lightBackground,
  text: COLOR.lightText,
  textSecondary: COLOR.lightTextSecondary,
  primary: COLOR.lightPrimary,
  navbarBg: COLOR.lightNavbar,
  navbarLink: COLOR.lightNavbarLink,
  footer: COLOR.lightFooter,
};

export const darkTheme: DefaultTheme = {
  body: COLOR.darkBackground,
  text: COLOR.darkText,
  textSecondary: COLOR.darkTextSecondary,
  primary: COLOR.darkPrimary,
  navbarBg: COLOR.darkNavbar,
  navbarLink: COLOR.darkNavbarLink,
  footer: COLOR.darkFooter,
};
