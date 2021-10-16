import { ThemeContext } from 'context/Theme';
import { ThemeType } from 'models/enums';
import { ChildrenProps } from 'models/props';
import React, { useState } from 'react';
import { getDataFromStorage, saveDataToStorage } from 'services/storage';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from 'styles/globals';
import { DEFAULT_THEME } from '../../constants';

const ThemeContextProvider = ({ children }: ChildrenProps) => {
  const initialState = getDataFromStorage('theme') || DEFAULT_THEME;
  const [state, setState] = useState<string>(initialState);
  const currentTheme = state === ThemeType.LIGHT ? lightTheme : darkTheme;

  const updateState = (theme: string): void => {
    setState(theme);
    saveDataToStorage('theme', theme);
  };

  return (
    <ThemeContext.Provider value={{ state, updateState }}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
