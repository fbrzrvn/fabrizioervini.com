import { features } from 'data/features';
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

const Features = () => {
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
              {feature.description}
            </FeaturesCardDescription>
          </FeaturesCard>
        ))}
      </FeaturesWraper>
    </FeaturesContainer>
  );
};

export default Features;
