import React from 'react';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import { pageNotFound } from '../data/pageNotFound';
import useTranslation from '../hooks/useTranslation';

const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar t={t} />
      <Section t={t} {...pageNotFound} />
    </>
  );
};

export default ErrorPage;
