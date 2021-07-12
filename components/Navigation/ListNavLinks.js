import NavLink from './NavLink';

export default function ListNavLinks({ links }) {
  return links.map((link) => <NavLink key={link.id} link={link} />);
}
