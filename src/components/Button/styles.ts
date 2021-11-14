import { BtnProps } from 'models/props';
import styled, { css } from 'styled-components';
import { COLOR } from 'styles/colors';

export const Button = css<BtnProps>`
  display: grid;
  place-items: center;
  height: ${({ isBig }) => isBig && '56px'};
  width: ${({ isBig }) => (isBig ? 'unset' : 'fit-content')};
  padding: ${({ isSmall }) => (isSmall ? '0.25rem 1rem' : '0.75rem 2rem')};
  border: none;
  border-radius: ${({ isBig }) => (isBig ? '8px' : '50px')};
  background-image: ${({ primary, secondary }) =>
    primary ? COLOR.btnPrimary : secondary && COLOR.btnSecondary};
  color: ${({ primary, secondary }) =>
    primary ? COLOR.gris900 : secondary && COLOR.gris100};
  font-family: 'Lato', sans-serif;
  font-weight: ${({ isBig }) => (isBig ? '700' : '500')};
  font-size: ${({ isSmall }) => (isSmall ? '0.875rem' : '1.25rem')};
  line-height: 1.75rem;
  letter-spacing: ${({ isBig }) => isBig && '0.5px'};
  text-decoration: none;
  text-transform: ${({ isBig }) => isBig && 'uppercase'};
  text-shadow: ${({ secondary }) =>
    secondary && '0 -1px 0 rgba(0, 0, 0, 0.25)'};
  white-space: nowrap;
  outline: none;
  pointer-events: all;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 200ms ease-in-out;
  &:hover {
    background-image: ${({ primary, secondary }) =>
      primary ? COLOR.btnPrimaryHover : secondary && COLOR.btnSecondaryHover};
    transition: all 200ms ease-in-out;
  }
  @media screen and (min-width: 480px) {
    padding: ${({ isSmall }) => isSmall && '0.75rem 2rem'};
    font-size: ${({ isSmall }) => isSmall && '1.25rem'};
  }
`;
export const Btn = styled.button`
  ${Button}
`;
export const BtnLink = styled.a`
  ${Button}
`;
