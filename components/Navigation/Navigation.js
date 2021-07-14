import Image from 'next/image';
import ListNavLinks from 'components/Navigation/ListNavLinks';
import { gql } from '@apollo/client';

export default function Navigation({ navContent }) {
  return (
    <nav>
      <Image
        src={navContent.logo.url}
        height='50'
        width='50'
        alt={navContent.altenativeText}
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
