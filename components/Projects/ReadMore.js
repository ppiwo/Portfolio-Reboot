import styled from 'styled-components';

const LinkWrap = styled.div`
  text-align: right;
`;
const Link = styled.a`
  text-decoration: underline;
  font-size: 0.875rem;
`;

export default function ReadMore({ children }) {
  return (
    <LinkWrap>
      <Link>{children}</Link>
    </LinkWrap>
  );
}
