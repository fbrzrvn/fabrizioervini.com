import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';
import LocaleProvider from 'providers/Locale';
import ThemeContextProvider from 'providers/Theme';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocaleProvider>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </LocaleProvider>
  );
}
export default MyApp;
