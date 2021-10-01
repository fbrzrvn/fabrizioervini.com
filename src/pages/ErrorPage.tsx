import React from 'react';
import Section from '../components/Section';
import { pageNotFound } from '../data/pageNotFound';
import CustomLayout from '../layout/CustomLayout';
import useTranslation from '../utils/useTranslation';

const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <CustomLayout>
      <Section t={t} {...pageNotFound} />
    </CustomLayout>
  );
};

export default ErrorPage;
