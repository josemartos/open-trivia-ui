import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'src/theme';

import PageRoot from 'src/components/layout/PageRoot';
import QuestionProvider from 'src/context/QuestionContext';

// main styles
import '../styles/main.scss';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <PageRoot>
      <QuestionProvider>
        <Component {...pageProps} />
      </QuestionProvider>
    </PageRoot>
  </ThemeProvider>
);

export default MyApp;
