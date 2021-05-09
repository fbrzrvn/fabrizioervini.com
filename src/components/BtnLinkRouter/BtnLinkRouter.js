import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR } from '../../styles/colors';

const BtnLinkRouter = styled(LinkRouter)`
  color: ${COLOR.btnPrimaryColor};
  background-image: ${COLOR.btnPrimary};
  border-radius: 50px;
  font-size: 16px;
  white-space: nowrap;
  text-decoration: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 30px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    background-image: ${COLOR.btnPrimaryHover};
    transition: all 200ms ease-in-out;
  }
`;

export default BtnLinkRouter;
