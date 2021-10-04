import React from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import useTranslation from '../hooks/useTranslation';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar t={t} />
      <Form t={t} />
      <Footer />
    </>
  );
};

export default ContactPage;
