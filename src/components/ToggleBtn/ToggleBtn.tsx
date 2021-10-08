import React, { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { useToggle } from '../../hooks';
import { ThemeType } from '../../models/enums';
import { ToggleThemeBtn, ToggleThemeWrap } from './styles';

const ToggleBtn = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [isAnimated, setIsAnimated] = useToggle();
  const { DARK, LIGHT } = ThemeType;
  const newTheme = theme === DARK ? LIGHT : DARK;
  const isDark = theme === DARK ? true : false;

  const handleClick = () => {
    setIsAnimated(true);
    setTimeout(() => {
      changeTheme(newTheme);
      setIsAnimated(false);
    }, 500);
  };

  return (
    <ToggleThemeWrap>
      <ToggleThemeBtn
        type="button"
        isAnimated={isAnimated}
        isDark={isDark}
        onClick={handleClick}
      />
    </ToggleThemeWrap>
  );
};

export default ToggleBtn;
