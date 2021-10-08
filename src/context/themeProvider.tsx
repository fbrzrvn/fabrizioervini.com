import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../constants';
import { ThemeType } from '../models/enums';
import { ChildrenProps } from '../models/props';
import { getDataFromStorage, saveDataToStorage } from '../services/storage';
import { darkTheme, GlobalStyles, lightTheme } from '../styles/globals';
import { ThemeContext } from './themeContext';

const ThemeContextProvider = ({ children }: ChildrenProps) => {
  const initialState = getDataFromStorage('theme') || DEFAULT_THEME;
  const [theme, setTheme] = useState(initialState);
  const currentTheme = theme === ThemeType.LIGHT ? lightTheme : darkTheme;

  const changeTheme = (theme: any) => {
    setTheme(theme);
    saveDataToStorage('theme', theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
