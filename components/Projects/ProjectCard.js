import Image from 'next/image';
import ListTechnologies from 'components/Projects/ListTechnologies';
import PageLink from './PageLink';
import styled from 'styled-components';

const ProjectCardWrap = styled.article`
  width: 100%;
  max-width: 385px;
  background-color: white;
  color: black;
  margin: 0 auto;
  position: relative;
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
  height: 60vw;
  max-height: 300px;
  position: relative;
`;

const IconGroup = styled.div`
  display: flex;
  width: 18%;
  max-width: 58px;
  justify-content: space-between;
`;

export default function ProjectCard({
  project: { image, sourceUrl, demoUrl, title, shortDescription, projectTags }
}) {
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
        <p>{shortDescription}</p>
        <ListTechnologies tags={projectTags} />
        <PageLink href={`/projects/${title}`}>Project Overview</PageLink>
      </ProjectInfo>
    </ProjectCardWrap>
  );
}
