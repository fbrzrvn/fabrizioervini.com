import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SnackbarProps } from 'models/props';
import React, { useState } from 'react';
import {
  SnackbarCloseIcon,
  SnackbarContainer,
  SnackbarInner,
  SnackbarText,
  SnackbarWrapper,
} from './styles';

const Snackbar = ({ type, text, icon }: SnackbarProps) => {
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setHide(true);
  };

  return !hide ? (
    <SnackbarContainer type={type}>
      <SnackbarWrapper>
        <SnackbarInner>
          {icon && <FontAwesomeIcon icon={icon} />}
          <SnackbarText>{text}</SnackbarText>
        </SnackbarInner>
        <SnackbarCloseIcon icon={faTimes} onClick={handleClick} type={type} />
      </SnackbarWrapper>
    </SnackbarContainer>
  ) : null;
};

export default Snackbar;
