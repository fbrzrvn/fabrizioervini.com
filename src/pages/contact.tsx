import Form from 'components/Form';
import MainLayout from 'components/MainLayout';
import Seo from 'components/Seo';
import { useTranslation } from 'hooks';
import { RoutesType } from 'models/enums';
import type { NextPage } from 'next';
import React from 'react';

const Contact: NextPage = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Seo title="Contact" path={RoutesType.CONTACT} />
      <MainLayout>
        <Form t={t} />
      </MainLayout>
    </React.Fragment>
  );
};

export default Contact;
