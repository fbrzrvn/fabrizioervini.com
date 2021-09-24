import React from 'react';
import Section from '../components/Section';
import { pageNotFound } from '../data/pageNotFound';
import CustomLayout from '../layout/CustomLayout';

const ErrorPage = () => {
  return (
    <CustomLayout>
      <Section {...pageNotFound} />
    </CustomLayout>
  );
};

export default ErrorPage;
