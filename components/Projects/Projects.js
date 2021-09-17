import ListProjects from 'components/Projects/ListProjects';
import SectionHeader from 'components/SectionHeader';

export default function Projects({
  projects: { header, subheader, projectCards }
}) {
  return (
    <section id='projects'>
      <SectionHeader header={header} subheader={subheader} />
      <ListProjects projects={projectCards} />
    </section>
  );
}

export const QUERY_PROJECTS = `
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
