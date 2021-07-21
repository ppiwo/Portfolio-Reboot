import Image from 'next/image';
import ListNavLinks from 'components/Navigation/ListNavLinks';
import { gql } from '@apollo/client';
import styled from 'styled-components';

const Nav = styled.nav`
  //display: flex;
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
