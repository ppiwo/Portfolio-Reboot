import Image from 'next/image';
import styled from 'styled-components';

export default function PageHeader({
  headerText,
  source,
  demo,
  description,
  image
}) {
  const Header = styled.header`
    margin-bottom: 80px;
    margin-top: 170px;
    @media (min-width: 992px) {
    margin-top: 200px;
  }
  `;

  const A = styled.a`
  padding-right: 24px;
  `;

  const Description = styled.p`
    margin-bottom: 25px;
  `;

  const ImageContainer = styled.div`
    aspect-ratio: 2/1;
    width: 100%;
    position: relative;
  `;

  const H1 = styled.h1`
    margin-bottom: 20px;
  `;

  const LinkWrapper = styled.div`
    margin-bottom: 25px;
    text-decoration: underline;
  `;

  return (
    <Header>
      <H1>{headerText}</H1>
      <LinkWrapper>
        <A
          href={source}
          title='Source Code'
          target='_blank'
          rel='noopener noreferrer'
        >
          Source Code
        </A>
        <A
          href={demo}
          title='Live Demo'
          target='_blank'
          rel='noopener noreferrer'
        >
          Demo
        </A>
      </LinkWrapper>
      <Description>{description}</Description>
      <ImageContainer>
        <Image src={image.url} alt={image.alternativeText} layout='fill' />
      </ImageContainer>
    </Header>
  );
}
