import Link from 'next/link';

export default function NavLink({ link }) {
  return (
    <div>
      <Link href={link.url}>{link.title}</Link>
    </div>
  );
}
