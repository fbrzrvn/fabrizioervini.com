import Form from 'components/Form';
import Navbar from 'components/Navbar';
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
      <Navbar t={t} />
      <Form t={t} />
    </div>
  );
};

export default Contact;
