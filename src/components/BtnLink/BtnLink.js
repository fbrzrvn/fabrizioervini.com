import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';

const BtnLink = styled(LinkRouter)`
  color: #1c1e21;
  background: #ebedf0;
  border: 1px solid #d4d5d8;
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
    transition: all 200ms ease-in-out;
    background: #e3e6e8;
  }
`;

export default BtnLink;
