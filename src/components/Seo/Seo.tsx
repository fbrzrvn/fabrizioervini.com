import { NextSeo } from 'next-seo';
import React from 'react';
import { BASE_URL } from '../../constants';

export type SeoProps = {
  title: string;
  path: string;
};

const Seo = ({ title, path }: SeoProps) => {
  return (
    <NextSeo
      title={`faber - ${title}`}
      description={`${title} page`}
      canonical={`${BASE_URL}${path}`}
      openGraph={{
        title: `faber - ${title}`,
        description: `${title} page`,
        type: 'website',
        url: BASE_URL,
        site_name: 'fabrizioervini.com',
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
      ]}
      twitter={{
        handle: '@faber_dev',
        site: BASE_URL,
        cardType: 'summary',
      }}
    />
  );
};

export default Seo;
