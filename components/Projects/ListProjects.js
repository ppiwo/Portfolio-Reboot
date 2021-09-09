import ProjectCard from 'components/Projects/ProjectCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  article:not(:last-child) {
    margin-bottom: 45px;
  }
  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    article {
      flex-basis: 47%;
    }
    article:not(:last-child),
    article:last-child {
      margin-bottom: 50px;
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
