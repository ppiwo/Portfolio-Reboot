import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// Create GraphQL client
const client = new ApolloClient({
    uri: 'http://localhost:8082/graphql',
    cache: new InMemoryCache()
});

export async function getHero() {
    const { data } = await client.query({
    query: gql` {

            hero(id: "60e3fbf1ca9d85c46c29f9ef") {
              Header
              Subheader
              button {
                logo {
                  url
                  alternativeText
                }
                label
                link
                hide_mobile
              }
            }
          }
        
        `
});
console.log(data.hero)
return data.hero;
}
