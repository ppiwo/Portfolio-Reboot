import { QUERY_HERO } from '../components/Hero/Hero';
import Hero from '../components/Hero/Hero';
import { initializeApollo } from '../lib/apollo-client';
import { QUERY_NAV } from '../components/Navigation/Navigation';
import { QUERY_PROJECTS } from '../components/Projects/Projects';
import Projects from '../components/Projects/Projects';
import React from 'react';

export default function Home({ hero, projects }) {
  return (
    <>
      <Hero heroContent={hero}></Hero>
      <Projects projects={projects}></Projects>
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

  let projects = await apolloClient.query({
    query: QUERY_PROJECTS
  });

  return {
    props: {
      hero: heroData.data.heroes[0],
      nav: navData,
      projects: projects.data.projects,
    }
  };
}
