import ProjectCard from './ProjectCard';

export default function ListProjects(props) {
  return props.projects.map((project) => 
    <ProjectCard key={project.id} project={project}/>
  );
}
