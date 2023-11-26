// _app.tsx

import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = (Component as NextPageWithLayout).getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;