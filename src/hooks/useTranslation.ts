import { LocaleContext } from 'context/Locale';
import { useContext, useState } from 'react';

const getTranslation =
  (json: any) =>
  (key: string): string => {
    return json ? json[key] : key;
  };

const useTranslation = (): { t: (key: string) => string } => {
  const [translations, setTranslations] = useState(null);
  const { state } = useContext(LocaleContext);

  import(`../translations/${state}`)
    .then((json) => {
      setTranslations(json.default);
    })
    .catch((error) => {
      console.log(error);
    });

  return { t: getTranslation(translations) };
};

export default useTranslation;
