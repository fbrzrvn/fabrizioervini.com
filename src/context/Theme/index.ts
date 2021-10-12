import { ContextProps } from 'models/props';
import React from 'react';
import { DEFAULT_THEME } from '../../constants';

export const ThemeContext = React.createContext<ContextProps>({
  state: DEFAULT_THEME,
  updateState: (theme: string) => null,
});
