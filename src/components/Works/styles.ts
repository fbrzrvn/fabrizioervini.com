import styled from 'styled-components';
import { COLOR } from 'styles/colors';
import { Heading, Main, TextSmall } from 'styles/mixins';

export const WorksContainer = styled.div`
  ${Main}
  flex-wrap: wrap;
`;
export const WorkHeading = styled.h1`
  ${Heading}
`;
export const WorksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: auto;
  padding: 50px 0;
  border-bottom: 1px solid ${COLOR.gris300};
  &:last-of-type {
    border-bottom: 1px solid transparent;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
`;
export const WorkImg = styled.img`
  width: 100%;
  max-width: 500px;
  margin: auto;
  @media screen and (min-width: 768px) {
    max-width: 50%;
  }
  @media screen and (min-width: 1100px) {
    max-width: 40%;
  }
`;
export const WorkInner = styled.div`
  margin: 2rem 1rem 1rem;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
  @media screen and (min-width: 1100px) {
    padding: 0 1rem;
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
