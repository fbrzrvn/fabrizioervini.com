import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import { useToggle, useTranslation } from 'hooks';
import { ChildrenProps } from 'models/props';
import React from 'react';

const MainLayout = ({ children }: ChildrenProps) => {
  const [isOpen, setIsOpen] = useToggle();
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Navbar t={t} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar t={t} isOpen={isOpen as boolean} setIsOpen={setIsOpen} />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
