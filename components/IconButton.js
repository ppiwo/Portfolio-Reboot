import Image from 'next/image';
import styled from 'styled-components';

const A = styled.a`
  display: block;
  position: relative;
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export default function IconButton({ icons, width, height, layout }) {
  return (
    <A
      key={icons.id}
      href={icons.link}
      title={icons.label}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Image
        src={icons.logo.url}
        alt={icons.logo.alternativeText}
        height={height}
        width={width}
        layout={layout}
      />
    </A>
  );
}
