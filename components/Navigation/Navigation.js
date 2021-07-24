import Image from 'next/image';
import ListNavLinks from 'components/Navigation/ListNavLinks';
import { gql } from '@apollo/client';
import styled from 'styled-components';

// Navigation is disabled for now. Might decide to use it later.
const Nav = styled.nav`
  display: none;
`;

export default function Navigation({ navContent: { logo, navlink } }) {
  return (
    <Nav>
      <Image
        src={logo.url}
        height='50'
        width='50'
        alt={logo.alternativeText}
        priority
      />
      <ListNavLinks links={navlink} />
    </Nav>
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
