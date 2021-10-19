import styled from 'styled-components';
import { COLOR } from 'styles/colors';
import { Heading, TextSmall } from 'styles/mixins';

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
  ${Heading}
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
  ${TextSmall}
  margin-bottom: 10px;
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
