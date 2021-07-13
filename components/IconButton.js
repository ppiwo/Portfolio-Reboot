import Image from 'next/image';
import { useState } from 'react';
import React from 'react';

const STATE = {
  DEFAULT: 'default',
  HOVERED: 'hovered'
};

export default function IconButton(props) {
  const [state, setState] = useState(STATE.DEFAULT);

  const onMouseEnter = () => setState(STATE.HOVERED);
  const onMouseLeave = () => setState(STATE.DEFAULT);

  return (
    <a
      key={props.icons.id}
      href={props.icons.link}
      title={props.icons.label}
      target='_blank'
      rel='noopener noreferrer'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={props.icons.logo.url}
        alt={props.icons.logo.alternativeText}
        height={props.height}
        width={props.width}
      />
    </a>
  );
}
