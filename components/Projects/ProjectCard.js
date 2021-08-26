import { useEffect, useState } from 'react';
import Image from 'next/image';
// import LikeButton from 'components/Projects/LikeButton';
// import LikeCounter from 'components/Projects/LikeCounter';
import ListTechnologies from 'components/Projects/ListTechnologies';
import ReadMore from './ReadMore';
import styled from 'styled-components';

const ProjectCardWrap = styled.article`
  margin: 20px 0;
  width: 100%;
  background-color: white;
  color: black;
  max-width: 485px;
  margin: 0 auto;
  @media (min-width: 992px) {
    margin: 0;
  }
  h3 {
    margin-top: 0;
    margin-bottom: 3px;
  }
`;

const ProjectInfo = styled.div`
  padding: 8px 10px 10px 10px;
  p {
    margin-bottom: 11px;
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 60vw; // Aspect ratio
  max-height: 300px;
  position: relative;
`;

const IconGroup = styled.div`
  display: flex;
  width: 18%;
  max-width: 58px;
  justify-content: space-between;
`;

// TODO Finish wiring up like functionality

export default function ProjectCard({
  project: {
    numberOfLikes,
    image,
    sourceUrl,
    demoUrl,
    title,
    shortDescription,
    projectTags
  }
}) {
  let [projectLikes, setLikes] = useState(numberOfLikes);
  // eslint-disable-next-line no-unused-vars
  let [projectWasLiked, setLikeStatus] = useState(null);

  useEffect(() => {
    setLikeStatus(isProjectLiked());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  const removeLike = (projectTitle) => {
    setLikes(projectLikes - 1);
    localStorage.removeItem(`liked${projectTitle}`);
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
    <ProjectCardWrap>
      <ImgWrap>
        <Image src={image.url} alt={image.alternativeText} layout='fill' />
      </ImgWrap>
      <ProjectInfo>
        <h3>{title}</h3>
        <IconGroup>
          {/* <LikeButton
            icon={ICONS.heart}
            likes={projectLikes}
            onClick={() => projectLiked(project.Title)}
            projectWasLiked
            className='icon'
          /> */}
          <a
            href={sourceUrl}
            title={`View the source code of ${title}`}
            target='_blank'
            rel='noreferrer noopener='
          >
            <Image
              src={ICONS.github.url}
              alt={ICONS.github.alt}
              height='24'
              width='24'
              className='icon'
            />
          </a>
          <a
            href={demoUrl}
            title={`View a live demo of ${title}`}
            target='_blank'
            rel='noreferrer noopener='
          >
            <Image
              src={ICONS.live.url}
              alt={ICONS.live.alt}
              height='24'
              width='24'
              className='icon'
            />
          </a>
        </IconGroup>
        {/* <LikeCounter projectLikes={projectLikes} /> */}
        <p>{shortDescription}</p>
        <ListTechnologies tags={projectTags} />
        <ReadMore href={`/projects/${title}`}>Read More</ReadMore>
      </ProjectInfo>
    </ProjectCardWrap>
  );
}
