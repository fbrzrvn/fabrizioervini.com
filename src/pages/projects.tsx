import MainLayout from 'components/MainLayout';
import Seo from 'components/Seo';
import Works from 'components/Works';
import { useTranslation } from 'hooks';
import { RoutesType } from 'models/enums';
import { NextPage } from 'next';
import React from 'react';

const projects: NextPage = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Seo title="Projects" path={RoutesType.PROJECTS} />
      <MainLayout>
        <Works t={t} />
      </MainLayout>
    </React.Fragment>
  );
};

export default projects;
