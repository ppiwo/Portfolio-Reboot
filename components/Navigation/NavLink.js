import Link from 'next/link';

export default function NavLink({ link: { url, title} }) {
  return (
    <div>
      <Link href={url} >{title}</Link>
    </div>
  );
}
