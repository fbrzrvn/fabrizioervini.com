import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import useTraslation from '../hooks/useTranslation';
import { ChildrenProps } from '../models/props';
import ScrollToTop from '../utils/ScrollToTop';

type Props = {
  hasFooter?: boolean;
};

const CustomLayout = ({ children, hasFooter }: ChildrenProps & Props) => {
  const { t } = useTraslation();
  return (
    <>
      <ScrollToTop />
      <Navbar t={t} />
      {children}
      {hasFooter && <Footer />}
    </>
  );
};

export default CustomLayout;
