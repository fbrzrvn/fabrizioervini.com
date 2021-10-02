import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR } from '../../styles/colors';

const BtnLinkRouter = styled(LinkRouter)`
  display: grid;
  place-items: center;
  width: 160px;
  padding: 12px 30px;
  border-radius: 50px;
  background-image: ${COLOR.btnPrimary};
  color: ${COLOR.btnPrimaryColor};
  font-size: 16px;
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
