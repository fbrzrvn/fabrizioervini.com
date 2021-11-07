import styled from 'styled-components';
import { COLOR } from 'styles/colors';
import { TextSmall } from 'styles/mixins';

export const WorksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: auto;
  padding: 50px 0;
  @media screen and (min-width: 768px) {
    padding: 50px 3rem;
  }
`;
export const WorksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 50px 0;
  border-bottom: 1px solid ${COLOR.gris300};
  &:last-of-type {
    border-bottom: 1px solid transparent;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const WorkImg = styled.img`
  width: 100%;
  max-width: 500px;
  margin: auto;
  @media screen and (min-width: 768px) {
    max-width: 50%;
  }
`;
export const WorkInner = styled.div`
  margin: 2rem 1rem 1rem;
  @media screen and (min-width: 768px) {
    margin: 0;
    margin-left: 1rem;
  }
`;
export const WorkTitle = styled.h2`
  margin-bottom: 0.625rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.8rem;
`;
export const WorkDescription = styled.div`
  ${TextSmall};
  max-width: 600px;
  margin-bottom: 1rem;
  color: ${COLOR.gris900};
`;
