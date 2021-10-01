import React from 'react';
import Form from '../components/Form';
import CustomLayout from '../layout/CustomLayout';
import useTranslation from '../utils/useTranslation';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <CustomLayout hasFooter>
      <Form t={t} />
    </CustomLayout>
  );
};

export default ContactPage;
