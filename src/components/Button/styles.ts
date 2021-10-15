import { BtnProps } from 'models/props';
import styled, { css } from 'styled-components';
import { COLOR } from 'styles/colors';

const Button = css<BtnProps>`
  display: grid;
  place-items: center;
  height: ${({ isBig }) => isBig && '56px'};
  width: ${({ isBig }) => (isBig ? '100%' : '160px')};
  padding: 12px 30px;
  border: none;
  border-radius: ${({ isBig }) => (isBig ? '8px' : '50px')};
  background: ${({ primary }) => primary && COLOR.btnPrimary};
  background: ${({ secondary }) => secondary && COLOR.btnSecondary};
  color: ${({ primary }) => primary && COLOR.btnPrimaryColor};
  color: ${({ secondary }) => secondary && COLOR.btnSecondaryColor};
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  text-transform: ${({ isBig }) => isBig && 'uppercase'};
  text-shadow: ${({ secondary }) =>
    secondary && '0 -1px 0 rgba(0, 0, 0, 0.25)'};
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    background-image: ${({ primary }) => primary && COLOR.btnPrimaryHover};
    background-image: ${({ secondary }) =>
      secondary && COLOR.btnSecondaryHover};
    transition: all 200ms ease-in-out;
  }
`;

export const Btn = styled.button`
  ${Button}
`;

export const BtnLink = styled.a`
  ${Button}
`;
