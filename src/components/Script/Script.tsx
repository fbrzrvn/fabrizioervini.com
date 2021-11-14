import { Head } from 'next/document';
import React from 'react';

const Script = () => {
  return (
    <Head>
      {/* Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });`,
        }}
      />
      {/* End Google Analytics */}
      {/* Google Font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Open+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default Script;
