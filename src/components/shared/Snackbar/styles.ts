import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { COLOR } from 'styles/colors';

type SnackbarProps = {
  type: string;
};

export const SnackbarContainer = styled.div<SnackbarProps>`
  width: 100%;
  margin-top: -1rem;
  margin-bottom: 25px;
  padding: 1rem;
  border-radius: 8px;
  background: ${({ type }) =>
    type === 'warning'
      ? COLOR.warning100
      : type === 'success' && COLOR.success100};
  color: ${({ type }) =>
    type === 'warning'
      ? COLOR.warning800
      : type === 'success' && COLOR.success900};
  font-weight: 500;
  font-size: 1.2rem;
  text-align: center;
`;
export const SnackbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SnackbarInner = styled.div``;
export const SnackbarText = styled.span`
  margin-left: 12px;
`;
export const SnackbarCloseIcon = styled(FontAwesomeIcon)`
  font-size: 14px;
  cursor: pointer;
  transition: color 300ms easi-in-ease-out;
  &:hover {
    color: ${({ type }) =>
      type === 'warning'
        ? COLOR.warning700
        : type === 'success' && COLOR.success700};
  }
`;
