import Contact from 'components/Contact';
import Features from 'components/Feautures';
import Hero from 'components/Hero';
import LatestWorks from 'components/LatestWorks';
import MainLayout from 'components/MainLayout';
import Section from 'components/Section';
import { aboutSection } from 'data/about';
import { blogSection } from 'data/blog';
import { useToggle, useTranslation } from 'hooks';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useToggle();
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>faber</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Hero t={t} />
        <Section t={t} {...aboutSection} />
        <Features />
        <LatestWorks t={t} />
        <Section t={t} {...blogSection} />
        <Contact t={t} />
      </MainLayout>
    </div>
  );
};

export default Home;
