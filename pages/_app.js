import React from 'react';

import PageRoot from 'src/components/layout/PageRoot';
import QuestionProvider from 'src/context/QuestionContext';

// main styles
import '../styles/main.scss';

const MyApp = ({ Component, pageProps }) => (
  <PageRoot>
    <QuestionProvider>
      <Component {...pageProps} />
    </QuestionProvider>
  </PageRoot>
);

export default MyApp;
