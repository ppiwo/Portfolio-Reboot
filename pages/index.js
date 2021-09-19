import About, { QUERY_ABOUT } from '@/components/About/About';
import Contact, { QUERY_CONTACT } from 'components/Contact/Contact';
import Hero, { QUERY_HERO } from 'components/Hero/Hero';
import Projects, { QUERY_PROJECTS } from 'components/Projects/Projects';
import Skills, { QUERY_SKILLS } from 'components/Skills/Skills';
import Head from 'next/head';
import { gql } from '@apollo/client';
import { initializeApollo } from 'lib/apollo-client';

export default function Home({ hero, about, projects, skills, contact }) {
  return (
    <>
      <Head>
        <title>Pat Piwo - Software Engineer ✨</title>
        <meta
          name='description'
          key='description'
          content='Patrick Piwowarczyk - 
              Software Engineer with an interest in all thing web - 
              Chicago, IL - 
              Lead Front End Developer @ Bluedge USA'
        />
      </Head>
      <Hero hero={hero} />
      <About about={about} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact contact={contact} />
    </>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const hero = await apolloClient.query({
    query: gql`
      ${QUERY_HERO}
    `,
    variables: { heroesLimit: 1 }
  });

  const about = await apolloClient.query({
    query: gql`
      ${QUERY_ABOUT}
    `
  });

  // let navData = await apolloClient.query({
  //   query: QUERY_NAV
  // });

  const projects = await apolloClient.query({
    query: gql`
      ${QUERY_PROJECTS}
    `
  });

  const skills = await apolloClient.query({
    query: gql`
      ${QUERY_SKILLS}
    `
  });

  const contact = await apolloClient.query({
    query: gql`
      ${QUERY_CONTACT}
    `
  });

  return {
    props: {
      hero: hero.data.homeHero,
      //nav: navData.data.navigation,
      projects: projects.data.project,
      skills: skills.data.skill,
      contact: contact.data.contact,
      about: about.data.about.about
    }
  };
}
