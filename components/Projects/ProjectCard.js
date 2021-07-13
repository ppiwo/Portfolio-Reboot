import LikeButton from './LikeButton';
import LikesCounter from './LikeCounter';
import ListTechnologies from './ListTechnologies';
import Image from 'next/image';
import { useState } from 'react';

export default function ProjectCard({ project }) {
  let [projectLikes, setLikes] = useState(0);

  const ICONS = {
    github: {
      url: 'https://res.cloudinary.com/dqfuzl8u2/image/upload/v1625553643/github_08fa096c44.svg',
      alt: 'Github Icon'
    },
    live: {
      url: 'https://res.cloudinary.com/dqfuzl8u2/image/upload/v1626157677/Group_8a6b4d17b0.svg',
      alt: 'Live Link Icon'
    },
    heart: {
      url: 'https://res.cloudinary.com/dqfuzl8u2/image/upload/v1626158601/akar_icons_heart_d56cf140e9.svg',
      alt: 'Heart Icon'
    }
  };

  console.log(project);

  return (
    <div className='project-card'>
      <Image
        src={project.Image.url}
        alt={project.Image.alternativeText}
        height='200'
        width='200'
      />
      <h3>{project.Title}</h3>
      <LikeButton
        icon={ICONS.heart}
        likes={projectLikes}
        onClick={() => setLikes(projectLikes + 1)}
      />
      <Image
        src={ICONS.github.url}
        alt={ICONS.github.alt}
        height='18'
        width='18'
      />
      <Image src={ICONS.live.url} alt={ICONS.live.alt} height='18' width='18' />
      <LikesCounter projectLikes={projectLikes} />
      <p>{project.description}</p>
      <ListTechnologies tags={project['project_tags']} />
    </div>
  );
}
