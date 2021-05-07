import styled from 'styled-components';
import { COLOR } from '../../styles/colors';

export const WorkContainer = styled.div`
  background: ${({ theme }) => theme.navbarBg};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 24px;
  @media screen and (max-width: 768px) {
    min-height: 1100px;
  }
  @media screen and (max-width: 480px) {
    min-height: 1300px;
  }
`;

export const WorkH1 = styled.h1`
  background: ${COLOR.linearGradient};
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 2.5rem;
  text-align: center;
  -webkit-text-fill-color: transparent;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  margin: 0 auto;
  max-width: 1100px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`;

export const WorkCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px;
  margin-bottom: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2 ease-in-out;
  }
`;

export const WorkImg = styled.img`
  width: 250px;
  height: 200px;
  margin-bottom: 16px;
`;

export const WorkInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 250px;
`;

export const WorkH2 = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const WorkP = styled.p`
  color: ${({ theme }) => theme.navbarBg};
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const BtnLink = styled.a`
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
  margin: 8px 0 16px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    transition: all 200ms ease-in-out;
    background: #e3e6e8;
  }
`;
