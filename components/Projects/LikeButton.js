import Image from 'next/image';

export default function LikeButton(props) {
  return (
    <div>
      <Image
        src={props.icon.url}
        alt={props.icon.alt}
        height='24'
        width='24'
        onClick={props.onClick}
        className={props.className}
      />
    </div>
  );
}
