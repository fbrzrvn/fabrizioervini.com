import { faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { LocaleContext } from 'context/Locale';
import { cultures } from 'data/culture';
import { useClickOutside, useScroll } from 'hooks';
import { TranslateProps } from 'models/props';
import React, { useContext, useEffect, useState } from 'react';
import {
  CultureArrowBtn,
  CultureArrowIcon,
  CultureChecked,
  CultureImg,
  CultureOptionsBox,
  CultureOptionsBtn,
  CultureOptionsLabel,
  CultureWrapper,
} from './styles';

const Culture = ({ t }: TranslateProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, updateState } = useContext(LocaleContext);
  const isScrolled = useScroll();
  const elementRef = useClickOutside(() => setIsOpen(false));
  const currentLanguage = cultures.find((c) => c.value === state);

  useEffect(() => {
    isScrolled && setIsOpen(false);
  }, [isScrolled]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CultureWrapper ref={elementRef} onClick={handleClick}>
      <CultureImg
        src={currentLanguage?.img}
        alt={currentLanguage?.value}
        width="18"
        height="18"
      />
      {/* <CultureLabel>{state}</CultureLabel> */}
      <CultureArrowBtn type="button" onClick={handleClick}>
        <CultureArrowIcon icon={faCaretDown} isopen={isOpen.toString()} />
      </CultureArrowBtn>
      <CultureOptionsBox isopen={isOpen}>
        {cultures.map((culture) => (
          <CultureOptionsBtn
            key={culture.id}
            type="button"
            onClick={() => {
              updateState(culture.value);
              setIsOpen(!isOpen);
            }}
          >
            <CultureImg src={culture.img} alt={culture.label} />
            <CultureOptionsLabel>{t(culture.label)}</CultureOptionsLabel>
            {culture.value === state && <CultureChecked icon={faCheck} />}
          </CultureOptionsBtn>
        ))}
      </CultureOptionsBox>
    </CultureWrapper>
  );
};

export default Culture;
