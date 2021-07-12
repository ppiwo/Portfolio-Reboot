import Layout from '../components/Layout';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo-client';
import '../styles/globals.css';

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
