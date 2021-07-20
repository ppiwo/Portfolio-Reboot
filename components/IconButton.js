import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

const A = styled.a`
  display: block;
  position: relative;
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;


const STATE = {
  DEFAULT: 'default',
  HOVERED: 'hovered'
};

export default function IconButton(props) {
  const [state, setState] = useState(STATE.DEFAULT);

  console.log('TODO: implement state interation for IconButton', state);

  const onMouseEnter = () => setState(STATE.HOVERED);
  const onMouseLeave = () => setState(STATE.DEFAULT);

  let buttonText = null;
  if (props.icons.label) buttonText = <span>{props.icons.label}</span>;

  return (
    <A
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
        layout={props.layout}
        priority={props.priority}
      />
    </A>
  );
}
