import Image from 'next/image';
import ListIconButtons from 'components/ListIconButtons';
import SectionHeader from 'components/SectionHeader';
import { gql } from '@apollo/client';
import styled from 'styled-components';
import height from 'hooks/viewportHeight';
import viewportHeight from 'hooks/viewportHeight';

const Section = styled.section`
  height: ${props => height}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const HeaderWrap = styled.div`
position: absolute;
top: 50%;
transform: translateY(-50%);
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 40vw; // Aspect ratio
  position: relative;
`;

export default function Hero({ hero: { Header, Subheader, button, heroImg } }) {
  const getHeight = viewportHeight();
  console.log('asdfd: ',getHeight)
  return (
    <Section height={getHeight}>
      <HeaderWrap>
        <SectionHeader header={Header} subheader={Subheader} mainHeader />
        <ListIconButtons icons={button} priority />
      </HeaderWrap>

      <ImgWrap>
        <Image
          src={heroImg.url}
          alt={heroImg.alternativeText}
          layout='fill'
          priority
          objectPosition='bottom'
        />
      </ImgWrap>
    </Section>
  );
}

export const QUERY_HERO = gql`
  query ($heroesLimit: Int!) {
    heroes(limit: $heroesLimit) {
      Header
      Subheader
      heroImg {
        url
        alternativeText
      }
      button {
        id
        link
        label
        logo {
          url
          alternativeText
        }
      }
    }
  }
`;
