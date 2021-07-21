import Image from 'next/image';
import ListIconButtons from 'components/ListIconButtons';
import SectionHeader from 'components/SectionHeader';
import { gql } from '@apollo/client';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const HeaderWrap = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(calc(-50% - 20px));
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 40vw; // Aspect ratio
  position: relative;
`;

export default function Hero({ hero: { Header, Subheader, button, heroImg } }) {
  return (
    <Section>
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
