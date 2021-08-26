import Image from 'next/image';
import styled from 'styled-components';
import { useState } from 'react';

const A = styled.a`
  display: block;
  position: relative;
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const STATE = {
  DEFAULT: 'default',
  HOVERED: 'hovered'
};

export default function IconButton({ icons, width, height, layout, priority }) {
  const [state, setState] = useState(STATE.DEFAULT);

  console.log('TODO: implement state interation for IconButton', state);

  const onMouseEnter = () => setState(STATE.HOVERED);
  const onMouseLeave = () => setState(STATE.DEFAULT);

  return (
    <A
      key={icons.id}
      href={icons.link}
      title={icons.label}
      target='_blank'
      rel='noopener noreferrer'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={icons.logo.url}
        alt={icons.logo.alternativeText}
        height={height}
        width={width}
        layout={layout}
        priority={priority}
      />
    </A>
  );
}
