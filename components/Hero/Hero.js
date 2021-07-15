import Image from 'next/image';
import ListIconButtons from 'components/ListIconButtons';
import SectionHeader from 'components/SectionHeader';
import { gql } from '@apollo/client';

export default function Hero({ heroContent }) {

  return (
    <section>
      <SectionHeader
        header={heroContent.Header}
        subheader={heroContent.Subheader}
        mainHeader={true}
      />
      <ListIconButtons icons={heroContent.button} priority={true}/>
      <Image
        src={heroContent.heroImg.url}
        alt={heroContent.heroImg.alternativeText}
        height='300'
        width='300'
        priority={true}
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
