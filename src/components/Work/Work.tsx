import React from 'react';
import { TranslateProps } from '../../models/props';
import Carousel from './Carousel';
import { works } from './data';
import {
  BtnLink,
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
        {works.map(work => (
          <WorkCard key={work.id}>
            <WorkImg src={work.img} alt={work.title} />
            <WorkInfo>
              <WorkH2>{work.title}</WorkH2>
              <WorkP>{t(work.description)}</WorkP>
              <BtnWrap>
                <BtnLink
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('visitWebsite')}
                </BtnLink>
              </BtnWrap>
            </WorkInfo>
          </WorkCard>
        ))}
      </Carousel>
    </WorkContainer>
  );
};

export default Work;
