import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { works } from 'data/works';
import { RoutesType } from 'models/enums';
import { TranslateProps } from 'models/props';
import Link from 'next/link';
import React from 'react';
import {
  LatestWorksCard,
  LatestWorksCardBody,
  LatestWorksCardH2,
  LatestWorksCardImg,
  LatestWorksCardLinks,
  LatestWorksCardP,
  LatestWorksContainer,
  LatestWorksContent,
  LatestWorksH1,
  LatestWorksLink,
  LatestWorksP,
} from './styles';

const LatestWorks = ({ t }: TranslateProps) => {
  const latestWorks = works.filter((work) => work.id >= 14);

  return (
    <LatestWorksContainer>
      <LatestWorksContent>
        <LatestWorksH1>{t('latestWorksTitle')}</LatestWorksH1>
        <LatestWorksP>
          {t('latestWorksDescription')}{' '}
          <Link href={RoutesType.PROJECTS} passHref>
            <LatestWorksLink>{t('latestWorksLink')}</LatestWorksLink>
          </Link>
          .
        </LatestWorksP>
        {latestWorks.map((work) => (
          <LatestWorksCard key={work.id}>
            <LatestWorksCardImg
              src={work.img}
              alt={work.title}
              height={300}
              width={516}
            />
            <LatestWorksCardBody>
              <LatestWorksCardH2>{work.title}</LatestWorksCardH2>
              <LatestWorksCardP>{t(work.description)}</LatestWorksCardP>
              <Link href={work.link} passHref>
                <LatestWorksCardLinks target="_blank" rel="noopener noreferrer">
                  {t('visitWebsite')}{' '}
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                </LatestWorksCardLinks>
              </Link>
            </LatestWorksCardBody>
          </LatestWorksCard>
        ))}
      </LatestWorksContent>
    </LatestWorksContainer>
  );
};

export default LatestWorks;
