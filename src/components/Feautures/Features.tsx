import { features } from 'data/features';
import { TranslateProps } from 'models/props';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {
  FeatureIcon,
  FeatureIconWrapper,
  FeaturesCard,
  FeaturesCardDescription,
  FeaturesCardTitle,
  FeaturesContainer,
  FeaturesWrapper,
} from './styles';

const Features = ({ t }: TranslateProps) => {
  return (
    <FeaturesContainer>
      <FeaturesWrapper>
        {features.map((feature) => (
          <ScrollAnimation
            animateIn="flipInX"
            animatePreScroll={true}
            delay={(feature.id / 100) * 1000}
          >
            <FeaturesCard key={feature.id}>
              <FeatureIconWrapper>
                <FeatureIcon icon={feature.icon} />
              </FeatureIconWrapper>
              <FeaturesCardTitle>{feature.title}</FeaturesCardTitle>
              <FeaturesCardDescription>
                {t(feature.description)}
              </FeaturesCardDescription>
            </FeaturesCard>
          </ScrollAnimation>
        ))}
      </FeaturesWrapper>
    </FeaturesContainer>
  );
};

export default Features;
