import { works } from 'data/works';
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
} from './styles';

const Work = ({ t }: TranslateProps) => {
  return (
    <WorkContainer id="work">
      <WorkH1>{t('workTitle')}</WorkH1>
      <Carousel>
        {works.map((work) => (
          <WorkCard key={work.id}>
            <WorkImg src={work.img} alt={work.title} />
            <WorkInfo>
              <WorkH2>{work.title}</WorkH2>
              <WorkP>{t(work.description)}</WorkP>
              <BtnWrap>
                <Button
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  primary
                >
                  {t('visitWebsite')}
                </Button>
              </BtnWrap>
            </WorkInfo>
          </WorkCard>
        ))}
      </Carousel>
    </WorkContainer>
  );
};

export default Work;
