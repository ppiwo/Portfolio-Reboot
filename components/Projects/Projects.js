import ListProjects from 'components/Projects/ListProjects';
import SectionHeader from 'components/SectionHeader';
import { gql } from '@apollo/client';

export default function Projects({ projects }) {
  return (
    <div>
      <SectionHeader
        header={projects[0].Header}
        subheader={projects[0].Subheader}
      />
      <ListProjects projects={projects[0].project} />
    </div>
  );
}

export const QUERY_PROJECTS = gql`
  query Projects {
    projects {
      Header
      Subheader
      project {
        Title
        description
        demo_url
        source_url
        Image {
          url
          alternativeText
        }
        project_tags {
          text
        }
      }
    }
  }
`;
