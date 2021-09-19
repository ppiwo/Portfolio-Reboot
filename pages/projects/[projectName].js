import Contact, { QUERY_CONTACT } from 'components/Contact/Contact';
import Head from 'next/head';
import ListProjects from '@/components/Projects/ListProjects';
import Navigation from '@/components/Navigation/Navigation';
import PageSection from '@/components/PageSection';
import ProjectHeader from '/components/Projects/ProjectHeader';
import TechOverview from '@/components/Projects/TechOverview';
import { gql } from '@apollo/client';
import { initializeApollo } from 'lib/apollo-client';
import styled from 'styled-components';

export default function Projects({ projectData, allProjects, contact }) {
  const otherProjects = allProjects.filter(
    (project) => project.title !== projectData.title
  );

  const PageWrap = styled.article`
    max-width: 850px;
    margin: auto;
  `;

  return (
    <>
      <Head>
        <title>Pat Piwo - {projectData.title}</title>
        <meta
          name='description'
          key='description'
          content={projectData.shortDescription}
        />
      </Head>
      <PageWrap>
        <Navigation />
        <ProjectHeader
          headerText={projectData.title}
          source={projectData.sourceUrl}
          demo={projectData.demoUrl}
          description={projectData.fullDescription}
          image={projectData.image}
        />
        <PageSection header='Choosing A Tech Stack' marginBottom={'0px'}>
          <TechOverview
            techStack={projectData.projectTags}
            textContent={projectData.techStackDescription}
          />
        </PageSection>
        <PageSection
          header='The Challanges'
          textContent={projectData.technicalChallenges}
        />
        <PageSection
          header='What I Learned'
          textContent={projectData.whatILearned}
        />
        <PageSection header='Other Projects'>
          <ListProjects projects={otherProjects} />
        </PageSection>
        <Contact contact={contact} />
      </PageWrap>
    </>
  );
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  // Query project names to use them as static rendered paths
  let queryRes = await apolloClient.query({
    query: gql`
      ${QUERY_PROJECT_NAMES}
    `
  });

  queryRes = queryRes.data.project.projectCards;

  // Build page params object
  let projectNames = [];
  queryRes.forEach((project) => {
    projectNames.push({
      params: { projectName: project.title.toLowerCase().replace(' ', '-') }
    });
  });

  return {
    paths: projectNames,
    fallback: false // Invalid paths will resolve to 404
  };
}

export async function getStaticProps(context) {
  const apolloClient = initializeApollo();

  // Query projects data
  let queryRes = await apolloClient.query({
    query: gql`
      ${QUERY_PROJECT_OVERVIEW}
    `
  });

  queryRes = queryRes.data.project.projectCards;

  // Check for matching project title
  let projectData = [];
  projectData = queryRes.find(
    (project) =>
      project.title.toLowerCase().replace(' ', '-') ===
      context.params.projectName
  );

  const contact = await apolloClient.query({
    query: gql`
      ${QUERY_CONTACT}
    `
  });

  return {
    props: {
      projectData: projectData,
      allProjects: queryRes,
      contact: contact.data.contact
    }
  };
}

const QUERY_PROJECT_NAMES = gql`
  query ProjectNames {
    project {
      projectCards {
        title
        id
      }
    }
  }
`;

const QUERY_PROJECT_OVERVIEW = gql`
  query ProjectDetails {
    project {
      projectCards {
        id
        title
        sourceUrl
        demoUrl
        fullDescription
        shortDescription
        techStackDescription
        technicalChallenges
        whatILearned
        image {
          url
          alternativeText
          width
          height
        }
        projectTags {
          id
          text
          logo {
            url
            alternativeText
          }
        }
      }
    }
  }
`;
