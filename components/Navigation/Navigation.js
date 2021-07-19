import Image from 'next/image';
import ListNavLinks from 'components/Navigation/ListNavLinks';
import { gql } from '@apollo/client';

export default function Navigation({
  navContent: { logo, navlink }
}) {
  return (
    <nav>
      <Image
        src={logo.url}
        height='50'
        width='50'
        alt={logo.alternativeText}
        priority
      />
      <ListNavLinks links={navlink} />
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
