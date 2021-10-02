import React from 'react';
import Section from '../components/Section';
import { pageNotFound } from '../data/pageNotFound';
import useTranslation from '../hooks/useTranslation';
import CustomLayout from '../layout/CustomLayout';

const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <CustomLayout>
      <Section t={t} {...pageNotFound} />
    </CustomLayout>
  );
};

export default ErrorPage;
