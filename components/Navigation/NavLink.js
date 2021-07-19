import Link from 'next/link';

export default function NavLink({ link: { url, title} }) {
  return (
    <li>
      <Link href={url} >{title}</Link>
    </li>
  );
}
