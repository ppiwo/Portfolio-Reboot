import styled from 'styled-components';

const Container = styled.div`
  margin: 0 16px;
`;

export default function Layout({ children }) {
  return (
    <>
      <Container>
        {/* <Navigation navContent={children.props.nav} /> */}
        <main>{children}</main>
      </Container>
    </>
  );
}
