import { works } from 'data/works';
import { RoutesType } from 'models/enums';
import { TranslateProps } from 'models/props';
import Link from 'next/link';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import FLink from '../shared/FLink';
import {
  LatestWorksCard,
  LatestWorksCardBody,
  LatestWorksCardH2,
  LatestWorksCardImg,
  LatestWorksCardP,
  LatestWorksContainer,
  LatestWorksContent,
  LatestWorksH1,
  LatestWorksLink,
  LatestWorksP,
} from './styles';

const LatestWorks = ({ t }: TranslateProps) => {
  const [y, setY] = React.useState(
    typeof window !== 'undefined' ? window.scrollY : 0,
  );
  const [isScrollUp, setIsScrollUp] = React.useState(false);

  const latestWorks = works.filter((work) => work.id >= 14);

  const handleScroll = React.useCallback(
    (e) => {
      const window = e.currentTarget;
      setY(window.scrollY);
      if (y > window.scrollY) setIsScrollUp(true);
      if (y < window.scrollY) setIsScrollUp(false);
    },
    [y],
  );

  React.useEffect(() => {
    setY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <LatestWorksContainer>
      <LatestWorksContent>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
          <LatestWorksH1>{t('latestWorksTitle')}</LatestWorksH1>
          <LatestWorksP>
            {t('latestWorksDescription')}{' '}
            <Link href={RoutesType.PROJECTS} passHref>
              <LatestWorksLink>{t('latestWorksLink')}</LatestWorksLink>
            </Link>
            .
          </LatestWorksP>
        </ScrollAnimation>
        {latestWorks.map((work) => (
          <ScrollAnimation
            animateIn={isScrollUp ? 'fadeInDown' : 'fadeInUp'}
            animatePreScroll={true}
            delay={(work.id / 100) * 1000}
            key={work.id}
          >
            <LatestWorksCard>
              <LatestWorksCardImg
                src={work.img}
                alt={work.title}
                height={300}
                width={516}
              />
              <LatestWorksCardBody>
                <LatestWorksCardH2>{work.title}</LatestWorksCardH2>
                <LatestWorksCardP>{t(work.summary)}</LatestWorksCardP>
                <FLink text={'visitWebsite'} url={work.link} />
              </LatestWorksCardBody>
            </LatestWorksCard>
          </ScrollAnimation>
        ))}
      </LatestWorksContent>
    </LatestWorksContainer>
  );
};

export default LatestWorks;
