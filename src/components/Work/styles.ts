import styled from 'styled-components';
import { COLOR } from 'styles/colors';
import { Heading, TextSmall } from 'styles/mixins';

export const WorkContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 100px 0;
  background: ${({ theme }) => theme.navbarBg};
  @media screen and (min-width: 480px) {
    padding: 100px 1.5rem;
  }
`;
export const WorkH1 = styled.h1`
  ${Heading}
  margin: 0 1rem 2rem;
  @media screen and (min-width: 480px) {
    margin: 0 0 2rem;
  }
`;
export const WorkWrapper = styled.div<{ isSmallMobileDevice: boolean }>`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: ${({ isSmallMobileDevice }) =>
    isSmallMobileDevice ? '0' : '0 44px'};
`;
export const WorkCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: calc(100% - 32px);
  margin: 0 1rem;
  border-radius: 8px;
  border: 1px solid ${COLOR.gris300};
  @media screen and (min-width: 768px) {
    min-width: calc(50% - 32px);
  }
`;
export const WorkImg = styled.img`
  border-radius: 8px 8px 0 0;
`;
export const WorkInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${COLOR.white};
  @media screen and (min-width: 480px) {
    padding: 1rem 1rem 1.5rem;
  }
`;
export const WorkH2 = styled.h2`
  margin-bottom: 0.625rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
  white-space: nowrap;
  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;
export const WorkP = styled.p`
  ${TextSmall}
  margin-bottom: 0.625rem;
  color: ${COLOR.gris900};
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
