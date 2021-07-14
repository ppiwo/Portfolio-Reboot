import Hero, {QUERY_HERO} from 'components/Hero/Hero';
import Projects, { QUERY_PROJECTS } from 'components/Projects/Projects';
import Skills, { QUERY_SKILLS } from 'components/Skills/Skills';
import { QUERY_NAV } from 'components/Navigation/Navigation';
import { initializeApollo } from 'lib/apollo-client';

export default function Home({ hero, projects, skills }) {
  return (
    <>
      <Hero heroContent={hero} />
      <Projects projects={projects} />
      <Skills skills={skills}/>
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
  })

  return {
    props: {
      hero: heroData.data.heroes[0],
      nav: navData,
      projects: projects.data.projects,
      skills: skills.data.skills
    }
  };
}
