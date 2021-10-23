import { DefaultTheme } from 'styled-components';

export const COLOR = {
  linearGradient: `linear-gradient(
    271deg,
    #a0e9ff 30%,
    #a162e8 50%,
    #f093b0 70%,
    #edca85 94%
  )`,

  btnPrimaryColor: '#212121',
  btnSecondaryColor: '#f5f5f5',
  btnPrimary: 'linear-gradient(271deg, #a162e8, #a0e9ff)',
  btnPrimaryHover: 'linear-gradient(271deg, #aa71ea, #a9ebff)',
  btnSecondary: 'linear-gradient(271deg, #f093b0, #edca85)',
  btnSecondaryHover: 'linear-gradient(271deg, #f19db7, #eecf91)',

  gris100: '#f5f5f5',
  gris300: '#e0e0e0',
  gris500: '#9e9e9e',
  gris700: '#616161',
  gris900: '#212121',
  success100: '#c8e6c9',
  success500: '#4caf50',
  success700: '#388e3c',
  success900: '#1b5e20',
  danger100: '#ffcdd2',
  danger500: '#f44336',
  danger700: '#d32f2f',
  danger900: '#b71c1c',

  // Dark Theme
  darkBackground: '#18191A',
  darkNavbar: '#242526',
  darkNavbarLink: '#BA8FFF',
  darkPrimary: '#a162e8',
  darkText: '#F5F6F7',
  darkTextSecondary: '#DADDE1',
  darkFooter: '#1C1E21',
  // Light Theme
  lightBackground: '#F5F6F7',
  lightNavbar: '#FFFFFF',
  lightNavbarLink: '#764ABC',
  lightPrimary: '#7431CA',
  lightText: '#1C1E21',
  lightTextSecondary: '#606770',
  lightFooter: '#F8F9FA',
};

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
