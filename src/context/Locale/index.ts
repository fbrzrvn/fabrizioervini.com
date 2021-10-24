import { ContextProps } from 'models/props';
import React from 'react';
import { DEFAULT_CULTURE } from '../../constants';

export const LocaleContext = React.createContext<ContextProps>({
  state: DEFAULT_CULTURE,
  updateState: () => null,
});
