import MainLayout from 'components/MainLayout';
import Section from 'components/Section';
import Seo from 'components/Seo';
import { pageNotFound } from 'data/pageNotFound';
import { useTranslation } from 'hooks';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const NotFound: NextPage = () => {
  const { t } = useTranslation();
  const { pathname } = useRouter();

  return (
    <React.Fragment>
      <Seo title="404 error" path={pathname} />
      <MainLayout>
        <Section t={t} {...pageNotFound} />
      </MainLayout>
    </React.Fragment>
  );
};

export default NotFound;
