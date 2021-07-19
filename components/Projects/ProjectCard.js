import Image from 'next/image';
import LikeButton from 'components/Projects/LikeButton';
import LikeCounter from 'components/Projects/LikeCounter';
import ListTechnologies from 'components/Projects/ListTechnologies';
import { useState, useEffect } from 'react';

// TODO Finish wiring up like functionality

export default function ProjectCard({ project }) {
  console.log(project)
  let [projectLikes, setLikes] = useState(project.numberOfLikes);
  let [projectWasLiked, setLikeStatus] = useState(null);

  useEffect(() => {
    setLikeStatus(isProjectLiked())
  },[])

  /**
   * Project liked click event
   * @param {*} projectTitle
   */
  const projectLiked = (projectTitle) => {
    projectTitle = projectTitle.replace(' ', '');
    if (!isProjectLiked(projectTitle)) {
      addLike(projectTitle);
    } else {
      removeLike(projectTitle);
    }
  };

  function isProjectLiked(projectTitle) {
    projectTitle = project.Title.replace(' ', '');
    console.log(localStorage.getItem(`liked${projectTitle}`));
    return localStorage.getItem(`liked${projectTitle}`);
  }

  /**
   * Add a like to the project
   */
  const addLike = (projectTitle) => {
  setLikes(projectLikes + 1);
  localStorage.setItem(`liked${projectTitle}`, true);
  // send add request
  };
  /**
   * Remove a like from the project
   */
  const removeLike = () => {
    setLikes(projectLikes - 1);
      localStorage.removeItem(`liked${project.Title}`);
      // send remove request
  };

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

  return (
    <article className='project-card'>
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
        onClick={() => projectLiked(project.Title)}
        projectWasLiked
      />
      <a
        href={project.source_url}
        title={`View the source code of ${project.Title}`}
        target='_blank'
        rel='noreferrer noopener='
      >
        <Image
          src={ICONS.github.url}
          alt={ICONS.github.alt}
          height='18'
          width='18'
        />
      </a>
      <a
        href={project.demo_url}
        title={`View a live demo of ${project.Title}`}
        target='_blank'
        rel='noreferrer noopener='
      >
        <Image
          src={ICONS.live.url}
          alt={ICONS.live.alt}
          height='18'
          width='18'
        />
      </a>
      <LikeCounter projectLikes={projectLikes} />
      <p>{project.description}</p>
      <ListTechnologies tags={project['project_tags']} />
    </article>
  );
}
