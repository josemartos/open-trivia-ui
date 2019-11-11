import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'next/app';
import configureStore from '../redux/store/configureStore';
import PageRoot from '../components/layout/PageRoot';

const { store, persistor } = configureStore();

// main styles
import '../styles/main.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <PageRoot>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </PageRoot>
    );
  }
}

export default MyApp;
