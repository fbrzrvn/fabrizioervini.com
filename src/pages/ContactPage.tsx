import React from 'react';
import Form from '../components/Form';
import useTranslation from '../hooks/useTranslation';
import CustomLayout from '../layout/CustomLayout';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <CustomLayout hasFooter>
      <Form t={t} />
    </CustomLayout>
  );
};

export default ContactPage;
