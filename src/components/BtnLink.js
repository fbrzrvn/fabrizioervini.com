import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

const BtnLink = styled(LinkRouter)`
  background: ${({primary}) => (primary ? '#61dafb' : '#282c34')};
  color: ${({dark}) => (dark ? '#282c34' : '#fff')};
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  outline: none;
  border: none;
  border-radius: 50px;
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  white-space: nowrap;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover {
    transition: all .2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#61dafb')};
  }
`;

export default BtnLink;