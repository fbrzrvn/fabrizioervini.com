import React, { useState } from 'react';
import { DEFAULT_CULTURE } from '../constants';
import { ChildrenProps } from '../models/props';
import { getDataFromStorage, saveDataToStorage } from '../services/storage';
import { TranslationsContext } from './translationsContext';

const TranslationsProvider = ({ children }: ChildrenProps) => {
  const initialState = getDataFromStorage('culture') || DEFAULT_CULTURE;
  const [culture, setCulture] = useState(initialState);

  const changeCulture = (newCulture: string): void => {
    setCulture(newCulture);
    saveDataToStorage('culture', newCulture);
  };

  return (
    <TranslationsContext.Provider value={{ culture, changeCulture }}>
      {children}
    </TranslationsContext.Provider>
  );
};

export default TranslationsProvider;
