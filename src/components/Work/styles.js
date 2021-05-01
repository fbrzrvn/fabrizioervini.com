import styled from 'styled-components';

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
  font-size: 2.5rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
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
  padding: 0 24px;
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const WorkCard = styled.div`
  background: ${({ theme }) => theme.navbarBg};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2 ease-in-out;
  }
`;

export const WorkImg = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const WorkH2 = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const WorkP = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
