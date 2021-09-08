import styled from 'styled-components';

const LinkWrap = styled.div`
  text-align: ${(props) => (props.center ? 'center' : 'right')};
`;
const Link = styled.a`
  text-decoration: underline;
  position: ${(props) => (props.center ? 'static' : 'absolute')};
  bottom: 10px;
  right: 11px;
`;

export default function pageLink({ href, children, center }) {
  return (
    <LinkWrap center={center}>
      <Link
        href={href.toLowerCase().replace(' ', '-')}
        center={center}
        title={children}
      >
        {children}
      </Link>
    </LinkWrap>
  );
}
