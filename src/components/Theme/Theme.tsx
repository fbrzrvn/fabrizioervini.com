import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../../context/themeContext';
import { ChildrenProps } from '../../models/props';
import { darkTheme, GlobalStyles, lightTheme } from '../../styles/globals';

const Theme = ({ children }: ChildrenProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
