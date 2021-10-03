import React, { useState } from 'react';
import { DEFAULT_THEME } from '../constants';
import { ChildrenProps } from '../models/props';
import { getDataFromStorage, saveDataToStorage } from '../services/storage';
import { ThemeContext } from './themeContext';

const ThemeProvider = ({ children }: ChildrenProps) => {
  const initialState = getDataFromStorage('theme') || DEFAULT_THEME;
  const [theme, setTheme] = useState(initialState);

  const changeTheme = (theme: any) => {
    setTheme(theme);
    saveDataToStorage('theme', theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
