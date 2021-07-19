import Image from 'next/image';
import ListIconButtons from 'components/ListIconButtons';
import SectionHeader from 'components/SectionHeader';
import { gql } from '@apollo/client';

export default function Hero({ hero: { Header, Subheader, button, heroImg } }) {
  return (
    <section classID="hero">
      <SectionHeader header={Header} subheader={Subheader} mainHeader />
      <ListIconButtons icons={button} priority />
      <Image
        src={heroImg.url}
        alt={heroImg.alternativeText}
        height='300'
        width='300'
        priority
      />
    </section>
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
