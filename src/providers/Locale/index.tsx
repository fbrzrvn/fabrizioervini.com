import { LocaleContext } from 'context/Locale';
import { ChildrenProps } from 'models/props';
import React, { useState } from 'react';
import { getDataFromStorage, saveDataToStorage } from 'services/storage';
import { DEFAULT_CULTURE } from '../../constants';

const LocaleProvider = ({ children }: ChildrenProps) => {
  const initialState = getDataFromStorage('culture') || DEFAULT_CULTURE;
  const [state, setState] = useState<string>(initialState);

  const updateState = (newCulture: string): void => {
    setState(newCulture);
    saveDataToStorage('culture', newCulture);
  };

  return (
    <LocaleContext.Provider value={{ state, updateState }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
