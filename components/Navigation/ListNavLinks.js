import NavLink from 'components/Navigation/NavLink';

export default function ListNavLinks({ links }) {
  return links.map((link) => <NavLink key={link.id} link={link} />);
}
