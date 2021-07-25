import React from 'react';
import { ToggleSwitch, ToggleThemeLabel, ToggleThemeWrap } from './styles';

type toogleBtnProps = {
  toggleTheme: (boolean: boolean) => string;
};

const ToggleBtn = ({ toggleTheme }: toogleBtnProps) => {
  return (
    <ToggleThemeWrap>
      <ToggleSwitch
        id="toggleSwitch"
        type="checkbox"
        onClick={() => toggleTheme}
      />
      <ToggleThemeLabel htmlFor="toggleSwitch" />
    </ToggleThemeWrap>
  );
};

export default ToggleBtn;
