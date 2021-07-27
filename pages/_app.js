import { ApolloProvider } from '@apollo/client';
import { GlobalStyles } from 'styles/GlobalStyles';
import Layout from 'components/Layout';
import { useApollo } from 'lib/apollo-client';

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
