import { ThemeContext } from 'context/Theme';
import { useToggle } from 'hooks';
import { ThemeType } from 'models/enums';
import React, { useContext } from 'react';
import { BtnIcon } from './styles';

const ThemeBtn = () => {
  const { state, updateState } = useContext(ThemeContext);
  const [isAnimated, setIsAnimated] = useToggle();
  const { DARK, LIGHT } = ThemeType;
  const newTheme = state === DARK ? LIGHT : DARK;
  const isDark = state === DARK ? true : false;

  const handleClick = () => {
    setIsAnimated(true);
    setTimeout(() => {
      updateState(newTheme);
      setIsAnimated(false);
    }, 500);
  };

  return (
    <BtnIcon
      role="button"
      isAnimated={isAnimated}
      isDark={isDark}
      onClick={handleClick}
    />
  );
};

export default ThemeBtn;
