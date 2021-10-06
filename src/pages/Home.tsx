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
import { useToggle, useTranslation } from '../hooks';

const Home = () => {
  const [isOpen, setIsOpen] = useToggle();
  const { t } = useTranslation();

  return (
    <>
      <Sidebar t={t} isOpen={isOpen as boolean} setIsOpen={setIsOpen} />
      <Navbar t={t} isOpen={isOpen} setIsOpen={setIsOpen} hasLink />
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
