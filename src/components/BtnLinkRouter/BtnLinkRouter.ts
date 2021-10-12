import Link from 'next/link';
import styled from 'styled-components';
import { COLOR } from 'styles/colors';

const BtnLinkRouter = styled(Link)`
  display: grid;
  place-items: center;
  width: 160px;
  padding: 12px 30px;
  border-radius: 50px;
  background: ${COLOR.btnPrimary};
  color: ${COLOR.btnPrimaryColor};
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    background-image: ${COLOR.btnPrimaryHover};
    transition: all 200ms ease-in-out;
  }
`;

export default BtnLinkRouter;
