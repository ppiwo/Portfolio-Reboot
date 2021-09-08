import styled from 'styled-components';

const LikesWrap = styled.div`
  font-family: 'Roboto', sans-serif;
  p {
    font-size: 0.875rem;
    font-weight: 700;
  }
`;
export default function LikeCounter({ projectLikes }) {
  return (
    <LikesWrap>
      <p>{projectLikes} likes</p>
    </LikesWrap>
  );
}
