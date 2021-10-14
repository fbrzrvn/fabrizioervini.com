import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import Navbar from 'components/Navbar';
import Section from 'components/Section';
import Sidebar from 'components/Sidebar';
import Work from 'components/Work';
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
        <meta name="description" content="homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar t={t} isOpen={isOpen as boolean} setIsOpen={setIsOpen} />
      <Navbar t={t} isOpen={isOpen} setIsOpen={setIsOpen} hasLink />
      <Hero t={t} />
      <Section t={t} {...aboutSection} />
      <Work t={t} />
      <Section t={t} {...blogSection} />
      <Contact t={t} />
      <Footer />
    </div>
  );
};

export default Home;