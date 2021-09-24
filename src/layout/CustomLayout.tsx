import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../utils/ScrollToTop';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  hasFooter?: boolean;
};

const CustomLayout: React.FC<Props> = ({ children, hasFooter }) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      {children}
      {hasFooter && <Footer />}
    </>
  );
};

export default CustomLayout;
