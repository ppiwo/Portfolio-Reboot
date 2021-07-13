import Image from 'next/image';

export default function LikeButton(props) {
  return (
    <div>
      <Image
        src={props.icon.url}
        alt={props.icon.alt}
        height='18'
        width='18'
        onClick={props.onClick}
      />
    </div>
  );
}
