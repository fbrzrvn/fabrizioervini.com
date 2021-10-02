import React from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Sidebar from '../components/Sidebar';
import Work from '../components/Work';
import { aboutSection } from '../data/aboutSection';
import { blogSection } from '../data/blogSection';
import useNavbar from '../utils/useNavbar';
import useTranslation from '../utils/useTranslation';

const Home = () => {
  const [isOpen, toggleNavbar] = useNavbar();
  const { t } = useTranslation();

  return (
    <>
      <Sidebar t={t} isOpen={isOpen as boolean} toggleNavbar={toggleNavbar} />
      <Navbar t={t} isOpen={false} toggleNavbar={toggleNavbar} />
      <Hero t={t} />
      <Section t={t} {...aboutSection} />
      <Work t={t} />
      <Section t={t} {...blogSection} />
      <Contact t={t} />
      <Footer />
    </>
  );
};

export default Home;
