import NavLink from 'components/Navigation/NavLink';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default function ListNavLinks({ links }) {
  return (
    <Ul>
      {links.map((link) => (
        <NavLink key={link.id} link={link} />
      ))}
    </Ul>
  );
}

ListNavLinks.PropTypes = {
  links: PropTypes.object.isRequired
}
