import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/Layout'

const description = "Amazing big wins is a student that loves to learn and build";
const title = "BigWins: Everything Students Needs Improvement In Nigeria";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta name="description"
            content={description} />
          <meta
            name="viewport"
            content="width=device-width,maximum-scale=1,initial-scale=1"
          />
          <meta property="og:type" content="Resume" />
          <meta name="og:title" property="og:title" content={title} />
          <meta name="og:description" property="og:description" content={description} />
          <meta property="og:image" content="hng.png" />
          <meta property="og:site_name" content="#" />
          <meta property="og:url" content="#" />
          <link rel="canonical" href="#" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:site" content="@sylvercodez" />
          <meta name="twitter:creator" content="@sylvercodez" />
          <meta name="twitter:image" content="hng.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/hn.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/hn.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-col</meta>or" content="#ffffff" />
        </Head>
        <ThemeProvider theme={theme}>
          <Layout>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </React.Fragment>
    </AnimatePresence>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};