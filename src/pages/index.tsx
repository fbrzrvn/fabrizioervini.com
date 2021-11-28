import Contact from 'components/Contact';
import Features from 'components/Feautures';
import Hero from 'components/Hero';
import LatestWorks from 'components/LatestWorks';
import MainLayout from 'components/MainLayout';
import Section from 'components/Section';
import Seo from 'components/Seo';
import { aboutSection } from 'data/about';
import { blogSection } from 'data/blog';
import { useTranslation } from 'hooks';
import { RoutesType } from 'models/enums';
import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Seo title="Home" path={RoutesType.HOME} />
      <MainLayout>
        <Hero t={t} />
        <Section t={t} {...aboutSection} />
        <Features t={t} />
        <LatestWorks t={t} />
        <Section t={t} {...blogSection} />
        <Contact t={t} />
      </MainLayout>
    </React.Fragment>
  );
};

export default Home;
