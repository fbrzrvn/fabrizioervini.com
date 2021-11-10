import { features } from 'data/features';
import { TranslateProps } from 'models/props';
import React from 'react';
import {
  FeatureIcon,
  FeatureIconWrapper,
  FeaturesCard,
  FeaturesCardDescription,
  FeaturesCardTitle,
  FeaturesContainer,
  FeaturesWraper,
} from './styles';

const Features = ({ t }: TranslateProps) => {
  return (
    <FeaturesContainer>
      <FeaturesWraper>
        {features.map((feature) => (
          <FeaturesCard key={feature.id}>
            <FeatureIconWrapper>
              <FeatureIcon icon={feature.icon} />
            </FeatureIconWrapper>
            <FeaturesCardTitle>{feature.title}</FeaturesCardTitle>
            <FeaturesCardDescription>
              {t(feature.description)}
            </FeaturesCardDescription>
          </FeaturesCard>
        ))}
      </FeaturesWraper>
    </FeaturesContainer>
  );
};

export default Features;
