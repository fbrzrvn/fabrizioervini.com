import { useContext, useState } from 'react';
import { TranslationsContext } from '../context/translationsContext';

const getTranslation = (json: any) => (key: string): string => {
  return json ? json[key] : key;
};

const useTranslation = (): { t: (key: string) => string } => {
  const [translations, setTranslations] = useState(null);
  const { culture } = useContext(TranslationsContext);

  import(`../translations/${culture}`)
    .then(json => {
      setTranslations(json.default);
    })
    .catch(error => {
      console.log(error);
    });

  return { t: getTranslation(translations) };
};

export default useTranslation;
