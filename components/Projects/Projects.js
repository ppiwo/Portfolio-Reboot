import ListProjects from 'components/Projects/ListProjects';
import SectionHeader from 'components/SectionHeader';
import { gql } from '@apollo/client';

export default function Projects({ projects }) {
  return (
    <section id='projects'>
      <SectionHeader
        header={projects[0].Header}
        subheader={projects[0].Subheader}
      />
      <ListProjects projects={projects[0].project} />
    </section>
  );
}

export const QUERY_PROJECTS = gql`
  query Projects {
    project {
      header
      subheader
      projectCards {
        id
        title
        shortDescription
        demoUrl
        sourceUrl
        numberOfLikes
        image {
          url
          alternativeText
        }
        projectTags {
          id
          text
        }
      }
    }
  }
`;
