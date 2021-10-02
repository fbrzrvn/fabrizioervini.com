import React, { useContext, useEffect, useState } from 'react';
import { TranslationsContext } from '../../context/translationsContext';
import { languages } from '../../data/languages';
import { TranslateProps } from '../../models/props';
import useClickOutside from '../../utils/useClickOutside';
import useScroll from '../../utils/useScroll';
import {
  LanguageArrowBtn,
  LanguageArrowIcon,
  LanguageImg,
  LanguageLabel,
  LanguageOptionChecked,
  LanguagesOptionBox,
  LanguagesOptionBtns,
  LanguagesOptionLabel,
  SelectWrapper,
} from './styles';

const Select = ({ t }: TranslateProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { culture, changeCulture } = useContext(TranslationsContext);
  const isScrolled = useScroll();
  const nodeEl = useClickOutside(() => setIsOpen(false));
  const currentLanguage = languages.find(l => l.value === culture);

  useEffect(() => {
    isScrolled && setIsOpen(false);
  }, [isScrolled]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SelectWrapper ref={nodeEl} onClick={handleClick}>
      <LanguageImg src={currentLanguage?.img} alt={currentLanguage?.value} />
      <LanguageLabel>{culture}</LanguageLabel>
      <LanguageArrowBtn type="button" onClick={handleClick}>
        <LanguageArrowIcon isOpen={isOpen} />
      </LanguageArrowBtn>
      <LanguagesOptionBox isOpen={isOpen}>
        {languages.map(lang => (
          <LanguagesOptionBtns
            key={lang.id}
            type="button"
            onClick={() => {
              changeCulture(lang.value);
              setIsOpen(!isOpen);
            }}
          >
            <LanguageImg src={lang.img} alt={lang.value} />
            <LanguagesOptionLabel>{t(lang.label)}</LanguagesOptionLabel>
            {lang.value === culture && <LanguageOptionChecked />}
          </LanguagesOptionBtns>
        ))}
      </LanguagesOptionBox>
    </SelectWrapper>
  );
};

export default Select;
