import { ApolloProvider } from '@apollo/client';
import Layout from 'components/Layout';
import { useApollo } from 'lib/apollo-client';
import { GlobalStyles } from 'styles/GlobalStyles'; 
import styled from 'styled-components';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
      <ApolloProvider client={apolloClient}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
          </Layout>
      </ApolloProvider>
  );
}
