import { QUERY_PROJECTS } from '@/components/Projects/Projects';
import { gql } from '@apollo/client';
import { initializeApollo } from 'lib/apollo-client';
import { useRouter } from 'next/router';

export default function Projects() {
  const router = useRouter();
  const { projectID } = router.query;

  return (
    <p>Project: {projectID}</p>
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

export async function getStaticPaths(props) {
  const apolloClient = initializeApollo();

  // Query project names to use them as static rendered paths
  let queryRes = await apolloClient.query({
    query: QUERY_PROJECT_NAMES
  });

  queryRes = queryRes.data.projects[0].project;

  // Build page params object
  let projectNames = [];
  queryRes.forEach((name) =>
    projectNames.push({ params: { projectID: name.Title.replace(' ', '') } })
  );

  return {
    paths: projectNames,
    fallback: false // Invalid paths will resolve to 404 // TODO later on this can resolve to a "view all projects page"
  };
}

export async function getStaticProps() {
  // TODO Query project details
  return { props: { foo: 'bar' } };
}

const QUERY_PROJECT_NAMES = gql`
  query ProjectNames {
    projects {
      project {
        Title
      }
    }
  }
`;
