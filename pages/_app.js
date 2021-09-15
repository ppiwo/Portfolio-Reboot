import * as gtag from '/lib/gtag';
import { ApolloProvider } from '@apollo/client';
import { GlobalStyles } from 'styles/GlobalStyles';
import Layout from 'components/Layout';
import Router from 'next/router';
import { useApollo } from 'lib/apollo-client';

// Google Analytics - track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
