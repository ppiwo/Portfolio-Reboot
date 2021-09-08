import Image from 'next/image';
import Link from 'next/link';
import { gql } from '@apollo/client';
import styled from 'styled-components';

// Navigation is disabled for now. Might decide to use it later.
const Nav = styled.nav`
  padding-top: 16px;
  margin-bottom: 125px;
  position: absolute;
  left: 16px;
  top: 16px;
  cursor: pointer;
  @media (min-width: 992px) {
    left: 45px;
  }
`;

export default function Navigation() {
  return (
    <Link href='/' passHref>
      <Nav>
        <Image
          src='https://res.cloudinary.com/dqfuzl8u2/image/upload/v1626051818/logo_no_text_e2c34666d9.svg'
          height='40'
          width='40'
          alt='PatPiwo logo'
          priority
        />
        {/* <ListNavLinks links={navlink} /> */}
      </Nav>
    </Link>
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
