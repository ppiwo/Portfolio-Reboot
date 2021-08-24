import ProjectHeader from '/components/Projects/ProjectHeader';
import { gql } from '@apollo/client';
import { initializeApollo } from 'lib/apollo-client';
import Link from 'next/link';
import PageSection from '@/components/PageSection';
import ListSkills from '@/components/Skills/ListSkills';
import TechOverview from '@/components/Projects/TechOverview';
import ListProjects from '@/components/Projects/ListProjects';

export default function Projects({projectData, allProjects}) {
  console.log(projectData)
  return (
    <>
    <ProjectHeader headerText={projectData.Title} source={projectData.source_url} demo={projectData.demo_url} description={projectData.description_full} image={projectData.Image} />
    <PageSection header="Choosing A Tech Stack">
      <TechOverview techStack={projectData.project_tags} textContent={projectData.tech_stack_description}/>
    </PageSection>
    <PageSection header="Technical Challenges" textContent={projectData.technical_challanges} />
    <PageSection header="What I Learned" textContent={projectData.what_i_learned} />
    <PageSection header="Other Projects"> <ListProjects projects={allProjects} /> </PageSection>
    </>
  );
}

    // Header (logo only for now)
    // Project Title
    // Description
    // Choosing a tech stack
      // tech stack hex
      // thought process
    // technical challanges
    // What I learned
    // Other Projects
    // footer

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  // Query project names to use them as static rendered paths
  let queryRes = await apolloClient.query({
    query: QUERY_PROJECT_NAMES
  });

  queryRes = queryRes.data.projects[0].project;

  // Build page params object
  let projectNames = [];
  queryRes.forEach((project) => {
    projectNames.push({
      params: { projectName: project.Title.toLowerCase().replace(' ', '-') }
    });
  });

  return {
    paths: projectNames,
    fallback: false // Invalid paths will resolve to 404 // TODO later on this can resolve to a "view all projects page"
  };
}

export async function getStaticProps(context) {
  const apolloClient = initializeApollo();

  // TODO Query project details
  // Query projects data
  let queryRes = await apolloClient.query({
    query: QUERY_PROJECT_OVERVIEW
  });

  queryRes = queryRes.data.projects[0].project;

  // Check for matching project title
  let projectData = [];
  projectData = queryRes.find(
    (project) =>
      project.Title.toLowerCase().replace(' ', '-') ===
      context.params.projectName
  );
  return {
      props: {
          projectData: projectData,
          allProjects: queryRes,
      },
  };
}

const QUERY_PROJECT_NAMES = gql`
  query ProjectNames {
    projects {
      project {
        Title
        id
      }
    }
  }
`;

const QUERY_PROJECT_OVERVIEW = gql`
query ProjectDetails {
  projects {
    project {
      source_url
      demo_url
      description_full
      Title
      Image {
        url
        alternativeText
        width
        height
      }
      project_tags {
        text
        logo {
          url
          alternativeText
        }
      }
      tech_stack_description
      technical_challanges
      what_i_learned
    }
  }
}
`;
