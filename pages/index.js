import { QUERY_HERO } from '../components/Hero/Hero';
import Hero from '../components/Hero/Hero';
import { initializeApollo } from '../lib/apollo-client';
import { QUERY_NAV } from '../components/Navigation/Navigation';
import React from 'react';

export default function Home({ hero }) {
  return (
    <>
      <Hero heroContent={hero}></Hero>
    </>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  let heroData = await apolloClient.query({
    query: QUERY_HERO,
    variables: { heroesLimit: 1 }
  });

  let navData = await apolloClient.query({
    query: QUERY_NAV
  });

  return {
    props: {
      hero: heroData.data.heroes[0],
      nav: navData
    }
  };
}
