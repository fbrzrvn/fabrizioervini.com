import React from 'react';
import { DEFAULT_THEME } from '../constants';

type ContextProps = {
  theme: string;
  changeTheme: (theme: string) => void;
};

export const ThemeContext = React.createContext<ContextProps>({
  theme: DEFAULT_THEME,
  changeTheme: (theme: string) => null,
});
