import { func } from 'prop-types';
import React from 'react';
import { ToggleSwitch, ToggleThemeLabel, ToggleThemeWrap } from './styles';

const ToggleBtn = ({ toggleTheme }) => {
  return (
    <ToggleThemeWrap>
      <ToggleSwitch id="toggleSwitch" type="checkbox" onClick={toggleTheme} />
      <ToggleThemeLabel htmlFor="toggleSwitch" />
    </ToggleThemeWrap>
  );
};

ToggleBtn.propTypes = {
  toggleTheme: func.isRequired,
};

export default ToggleBtn;
