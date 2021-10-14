import { faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { LocaleContext } from 'context/Locale';
import { cultures } from 'data/culture';
import { useClickOutside, useScroll } from 'hooks';
import { CultureProps, TranslateProps } from 'models/props';
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
  const { state, updateState } = useContext(LocaleContext);
  const [isOpen, setIsOpen] = useState(false);
  const [culture, setCulture] = useState<CultureProps | undefined>();
  const isScrolled = useScroll();
  const elementRef = useClickOutside(() => setIsOpen(false));
  const currentCulture = cultures.find((c) => c.value === state);

  useEffect(() => {
    setCulture(currentCulture);
  });

  useEffect(() => {
    isScrolled && setIsOpen(false);
  }, [isScrolled]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CultureWrapper ref={elementRef} onClick={handleClick}>
      <CultureImg
        src={culture?.img}
        alt={culture?.value}
        width="18"
        height="18"
      />
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
