import { gql } from '@apollo/client';
import Image from 'next/image';
import IconButton from './IconButton';
import ListIconButtons from './ListIconButtons';

export default function Hero({ heroContent }) {
  return (
    <header>
      <div>{heroContent.Header}</div>
      <div>{heroContent.Subheader}</div>
      <ListIconButtons icons={heroContent.button}/>
      <Image
        src={heroContent.heroImg.url}
        alt={heroContent.heroImg.alternativeText}
        height='300'
        width='300'
      />
    </header>
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
