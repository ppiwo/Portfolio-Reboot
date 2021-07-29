import ProjectCard from 'components/Projects/ProjectCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  article:not(:last-child) {
    margin-bottom: 100px;
  }
  @media (min-width: 992px) {
    display: flex;
    article:not(:last-child),
    article:last-child {
      margin-bottom: 50px;
    }
    article:nth-child(odd) {
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
