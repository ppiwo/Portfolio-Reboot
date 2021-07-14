import 'styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import Layout from 'components/Layout';
import { useApollo } from 'lib/apollo-client';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
          </Layout>
      </ApolloProvider>
  );
}
