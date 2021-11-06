import MainLayout from 'components/MainLayout';
import Works from 'components/Works';
import { useTranslation } from 'hooks';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const projects: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>Projects - faber</title>
        <meta name="description" content="Projects page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Works t={t} />
      </MainLayout>
    </div>
  );
};

export default projects;
