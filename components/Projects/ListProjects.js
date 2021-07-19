import ProjectCard from 'components/Projects/ProjectCard';

export default function ListProjects({projects}) {
  return projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));
}
