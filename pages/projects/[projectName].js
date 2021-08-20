import { QUERY_PROJECTS } from '@/components/Projects/Projects';
import { gql } from '@apollo/client';
import { initializeApollo } from 'lib/apollo-client';
import { useRouter } from 'next/router';

export default function Projects(props) {
  return (
    <p>Project title: {props.Title}</p>
    // Header (logo only for now)
    // Project Title
    // Description
    // Project details - tech stack - code - live
    // Image of project
    // Purpose & Goal
    // Stack and explenation
    // More images (optional)
    // Problems
    // Lessons learned
    // Other projects
    // Footer
  );
}

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
  return { props: projectData };
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
        Title
        id
      }
    }
  }
`;
