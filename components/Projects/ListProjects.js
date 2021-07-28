import ProjectCard from 'components/Projects/ProjectCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  article:not(:last-child) {
    margin-bottom: 100px;
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    display: flex;
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
