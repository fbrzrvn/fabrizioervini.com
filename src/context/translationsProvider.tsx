import React, { useState } from 'react';
import { DEFAULT_CULTURE } from '../constants';
import { TranslationsContext } from './translationsContext';

type Props = {
  children: React.ReactNode;
};

const TranslationsProvider = ({ children }: Props) => {
  const [culture, setCulture] = useState(DEFAULT_CULTURE);

  const changeCulture = (newCulture: string): void => {
    setCulture(newCulture);
  };

  return (
    <TranslationsContext.Provider value={{ culture, changeCulture }}>
      {children}
    </TranslationsContext.Provider>
  );
};

export default TranslationsProvider;
