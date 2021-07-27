import ProjectCard from 'components/Projects/ProjectCard';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    article:not(:last-child){
      margin-bottom: 100px;
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
