import React from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';
import ScrollToTop from '../utils/ScrollToTop';

const ContactPage = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Form />
      <Footer />
    </>
  );
};

export default ContactPage;
