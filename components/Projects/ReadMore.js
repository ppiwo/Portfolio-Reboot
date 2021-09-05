import styled from 'styled-components';

const LinkWrap = styled.div`
  text-align: right;
`;
const Link = styled.a`
  text-decoration: underline;
  font-size: 0.875rem;
  position: absolute;
  bottom: 10px;
  right: 11px;
`;

export default function ReadMore({ href, children }) {
  return (
    <LinkWrap>
      <Link href={href.toLowerCase().replace(' ', '-')}>{children}</Link>
    </LinkWrap>
  );
}
