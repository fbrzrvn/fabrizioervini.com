import styled from 'styled-components';
import { COLOR } from 'styles/colors';

export const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 100px 24px;
  background: ${({ theme }) => theme.navbarBg};
`;
export const WorkH1 = styled.h1`
  margin-bottom: 64px;
  background: ${COLOR.linearGradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  text-align: center;
  @media screen and (min-width: 480px) {
    font-size: 2.5rem;
  }
`;
export const WorkCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 100%;
  width: 100%;
  border-radius: 10px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
  }
`;
export const WorkImg = styled.img`
  margin: auto;
  height: 100%;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 10px 10px 0 0;
  @media screen and (min-width: 768px) {
    width: 80%;
    height: 300px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 500px;
    height: 400px;
    margin-left: 60px;
    margin-bottom: 0;
    border-radius: 10px 0 0 10px;
  }
`;
export const WorkInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 24px 32px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  @media screen and (min-width: 768px) {
    width: 80%;
    margin: auto;
  }
  @media screen and (min-width: 1024px) {
    align-items: center;
    justify-content: center;
    margin: initial;
    margin-right: 60px;
    padding: 0;
    border-radius: 0 10px 10px 0;
  }
`;
export const WorkH2 = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;
export const WorkP = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 24px;
  color: ${COLOR.btnPrimaryColor};
  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  margin: 8px 0;
  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;
export const BtnLink = styled.a`
  padding: 12px 30px;
  white-space: nowrap;
  color: ${COLOR.btnPrimaryColor};
  background: ${COLOR.btnPrimary};
  border-radius: 50px;
  font-family: inherit;
  font-size: 18px;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    background: ${COLOR.btnPrimaryHover};
    transition: all 200ms ease-in-out;
  }
`;
