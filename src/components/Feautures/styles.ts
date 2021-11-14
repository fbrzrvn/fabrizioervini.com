import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { COLOR } from 'styles/colors';
import { TextSmall } from 'styles/mixins';

export const FeaturesContainer = styled.section`
  padding: 100px 0;
  background: ${({ theme }) => theme.body};
  box-shadow: rgb(48 76 112 / 25%) 0px 3px 10px;
`;
export const FeaturesWraper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, calc(100% - 48px));
  align-items: stretch;
  justify-content: center;
  gap: 1rem;
  max-width: 1100px;
  margin: auto;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 1.5rem;
  }
`;
export const FeaturesCard = styled.div`
  position: relative;
  max-width: 360px;
  margin: 0 auto;
  padding: 1rem 2rem 2rem;
  border-radius: 4px;
  border: 1px solid ${COLOR.gris300};
  background: ${COLOR.white};
  text-align: center;
  &:not(:first-of-type) {
    margin-top: 5rem;
  }
  @media screen and (min-width: 768px) {
    margin-top: unset;
    padding: 1rem 1rem 2rem;
    &:not(:first-of-type) {
      margin-top: unset;
    }
  }
`;
export const FeatureIconWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: -48px;
  transform: translateX(-50%);
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
  background-image: ${COLOR.iconGrandient};
  border-radius: 50%;
`;
export const FeatureIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
`;
export const FeaturesCardTitle = styled.h3`
  margin: 3rem 0 0.625rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
`;
export const FeaturesCardDescription = styled.p`
  ${TextSmall}
`;
