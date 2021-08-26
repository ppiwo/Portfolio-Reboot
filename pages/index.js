import About, {QUERY_ABOUT} from '@/components/About/About';
import Contact, { QUERY_CONTACT } from 'components/Contact/Contact';
import Hero, { QUERY_HERO } from 'components/Hero/Hero';
import Projects, { QUERY_PROJECTS } from 'components/Projects/Projects';
import Skills, { QUERY_SKILLS } from 'components/Skills/Skills';
import Head from 'next/head';
import { initializeApollo } from 'lib/apollo-client';

export default function Home({ hero, about, projects, skills, contact }) {
  return (
    <>
      <Head>
        <title>Pat Piwo - Software Engineer ✨</title>
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

  const heroData = await apolloClient.query({
    query: QUERY_HERO,
    variables: { heroesLimit: 1 }
  });

  // let navData = await apolloClient.query({
  //   query: QUERY_NAV
  // });

  const projects = await apolloClient.query({
    query: QUERY_PROJECTS
  });

  const skills = await apolloClient.query({
    query: QUERY_SKILLS
  });

  const contact = await apolloClient.query({
    query: QUERY_CONTACT
  });
  
  const about = await apolloClient.query({
      query: QUERY_ABOUT,
  });

  return {
    props: {
      hero: heroData.data.heroes[0],
      //nav: navData.data.navigation,
      projects: projects.data.projects,
      skills: skills.data.skills,
      contact: contact.data.contacts[0],
      about: about.data.about.about
    }
  };
}
