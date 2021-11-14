import Form from 'components/Form';
import MainLayout from 'components/MainLayout';
import { useTranslation } from 'hooks';
import type { NextPage } from 'next';
import Head from 'next/head';

const Contact: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>Contact - faber</title>
        <meta name="description" content="Contact page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Form t={t} />
      </MainLayout>
    </div>
  );
};

export default Contact;
