import Link from 'next/link';
import PropTypes from 'prop-types';

export default function NavLink({ link: { url, title } }) {
  return (
    <li>
      <Link href={url}>{title}</Link>
    </li>
  );
}

NavLink.propTypes = {
  link: PropTypes.object,
  url: PropTypes.string,
  title: PropTypes.string
};
