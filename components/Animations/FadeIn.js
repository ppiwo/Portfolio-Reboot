import { css, keyframes } from 'styled-components';

const keyFrames = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const test = css`
  animation: ${keyFrames} 2s linear;
`;

export const FadeIn = () => {
  return css`
    ${test}
  `;
};
