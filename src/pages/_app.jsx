import App from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import './styles/app.scss';
import Layout from '../components/layout/Layout';
import withRedux from "next-redux-wrapper";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from '../redux/store.ts';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


class CustomApp extends App {
  static async getInitialProps(props) {
    const pageProps = props.Component.getInitialProps ? await props.Component.getInitialProps(props.ctx) : {};
    return {
      pageProps: pageProps
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(CustomApp);


