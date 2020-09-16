import App from "next/app";
import { Provider } from "react-redux";
import React from "react";
import "./styles/app.scss";
import Layout from "../components/layout/Layout";
import withRedux from "next-redux-wrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "../redux/store";
import Head from "next/head";
import InstallPWA from "../components/pwa/PWA";

import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";
import Router from "next/router";

const override = css`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0, -50%);
`;

class CustomApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 200)
    Router.push('/pizza')
  }

  static async getInitialProps(props) {
    const pageProps = props.Component.getInitialProps ? await props.Component.getInitialProps(props.ctx) : {};
    return {
      pageProps: pageProps
    };
  }

  componentWillUnmount() {
    localStorage.removeItem('loc-prompt')
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      this.state.loading ?
        <div className="sweet-loading">
          <FadeLoader
            css={override}
            size={150}
            color={"#ffc107"}
            loading={this.state.loading}
          />
        </div>
        :
        <Provider store={store}>
          <InstallPWA />
          <Head>
            <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" />
            <title>Pancho</title>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
    );
  }
}

const makeStore = () => store;

export default withRedux(makeStore)(CustomApp);


