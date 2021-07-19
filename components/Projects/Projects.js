import ListProjects from 'components/Projects/ListProjects';
import SectionHeader from 'components/SectionHeader';
import { gql } from '@apollo/client';

export default function Projects({ projects }) {
  return (
    <section id="projects">
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
    projects {
      Header
      Subheader
      project {
        id
        Title
        description
        demo_url
        source_url
        numberOfLikes
        Image {
          url
          alternativeText
        }
        project_tags {
          id
          text
        }
      }
    }
  }
`;

const ADD_PROJECT_LIKE = () => {
  
}
