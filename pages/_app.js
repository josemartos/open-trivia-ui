import React from 'react';
import App from 'next/app';
import PageRoot from '../components/layout/PageRoot';

// main styles
import '../styles/main.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <PageRoot>
        <Component {...pageProps} />
      </PageRoot>
    );
  }
}

export default MyApp;
