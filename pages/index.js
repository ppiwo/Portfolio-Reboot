import Contact, { QUERY_CONTACT } from 'components/Contact/Contact';
import Hero, { QUERY_HERO } from 'components/Hero/Hero';
import Projects, { QUERY_PROJECTS } from 'components/Projects/Projects';
import Skills, { QUERY_SKILLS } from 'components/Skills/Skills';
import Head from 'next/head';
import { QUERY_NAV } from 'components/Navigation/Navigation';
import { initializeApollo } from 'lib/apollo-client';

export default function Home({ hero, projects, skills, contact, nav }) {
  return (
    <>
      <Head>
        <title>Pat Piwo - Software Engineer ✨</title>
        <meta
          name='description'
          content='Patrick Piwowarczyk - 
          Software Engineer with an interest in all thing web - 
          Chicago, IL - 
          Lead Front End Developer @ Bluedge USA'
        />
      </Head>
      <Hero hero={hero} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact contact={contact} />
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

  let skills = await apolloClient.query({
    query: QUERY_SKILLS
  });

  let contact = await apolloClient.query({
    query: QUERY_CONTACT
  });

  return {
    props: {
      hero: heroData.data.heroes[0],
      nav: navData.data.navigation,
      projects: projects.data.projects,
      skills: skills.data.skills,
      contact: contact.data.contacts[0]
    }
  };
}

<style jsx global>{`
  html,
  body {
    font-family: Roboto;
  }
  * {
    box-sizing: border-box;
  }
`}</style>
