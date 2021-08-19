import { useRouter } from 'next/router'

const Projects = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
  <p>Project: {pid}</p>
  // Header (logo only for now)
  // Project Title
  // Description
  // Project details - tech stack - code - live
  // Image of project
  // Purpose & Goal
  // Stack and explenation
  // More images (optional)
  // Problems
  // Lessons learned
  // Other projects
  // Footer
  );
}

export default Projects