import { works } from 'data/works';
import { useIsMobileDevice } from 'hooks';
import { TranslateProps } from 'models/props';
import React from 'react';
import Button from '../Button';
import Carousel from '../Carousel';
import {
  BtnWrap,
  WorkCard,
  WorkContainer,
  WorkH1,
  WorkH2,
  WorkImg,
  WorkInfo,
  WorkP,
  WorkWrapper,
} from './styles';

const Work = ({ t }: TranslateProps) => {
  const { isSmallMobileDevice } = useIsMobileDevice();

  return (
    <WorkContainer id="work">
      <WorkH1>{t('workTitle')}</WorkH1>
      <WorkWrapper isSmallMobileDevice={isSmallMobileDevice}>
        <Carousel>
          {works.map((work) => (
            <WorkCard key={work.id}>
              <WorkImg
                src={work.img}
                alt={work.title}
                width={516}
                height={300}
              />
              <WorkInfo>
                <WorkH2>{work.title}</WorkH2>
                <WorkP>{t(work.description)}</WorkP>
                <BtnWrap>
                  <Button
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    primary
                    isSmall
                  >
                    {t('visitWebsite')}
                  </Button>
                </BtnWrap>
              </WorkInfo>
            </WorkCard>
          ))}
        </Carousel>
      </WorkWrapper>
    </WorkContainer>
  );
};

export default Work;
