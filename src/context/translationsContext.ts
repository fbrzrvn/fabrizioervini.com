import React from 'react';
import { DEFAULT_CULTURE } from '../constants';

type ContextProps = {
  culture: string;
  changeCulture(state: string): void;
};

export const TranslationsContext = React.createContext<ContextProps>({
  culture: DEFAULT_CULTURE,
  changeCulture: () => null,
});
