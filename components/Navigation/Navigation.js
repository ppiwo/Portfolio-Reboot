import Image from 'next/image';
import ListNavLinks from 'components/Navigation/ListNavLinks';
import { gql } from '@apollo/client';

export default function Navigation({ navContent }) {
  console.log(navContent.altenativeText)
  return (
    <nav>
      <Image
        src={navContent.logo.url}
        height='50'
        width='50'
        alt={navContent.alternativeText}
        priority={true}
      />
      <ListNavLinks links={navContent.navlink} />
    </nav>
  );
}

export const QUERY_NAV = gql`
  query {
    navigation {
      logo {
        url
        alternativeText
      }
      navlink {
        id
        title
        url
      }
    }
  }
`;
