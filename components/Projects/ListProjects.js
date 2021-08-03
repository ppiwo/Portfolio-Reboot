import ProjectCard from 'components/Projects/ProjectCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  article:not(:last-child) {
    margin-bottom: 100px;
  }
  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    article { flex-basis: 47%; }
    article:not(:last-child),
    article:last-child {
      margin-bottom: 25px;
    }
    article:not(:last-child) {
      margin-right: 20px;
    }

  }
`;

export default function ListProjects({ projects }) {
  return (
    <Wrapper>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Wrapper>
  );
}
