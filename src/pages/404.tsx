import MainLayout from 'components/MainLayout';
import Section from 'components/Section';
import { pageNotFound } from 'data/pageNotFound';
import { useTranslation } from 'hooks';
import type { NextPage } from 'next';
import Head from 'next/head';

const NotFound: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>Oops I did it again - faber</title>
        <meta name="description" content="404 error page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Section t={t} {...pageNotFound} />
      </MainLayout>
    </div>
  );
};

export default NotFound;
