import styled from 'styled-components';

const Container = styled.div`
  padding: 0 16px;
  // Tablet Vertical
  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: 0 32px;
  }
  @media (min-width: 992px) {
    padding: 0 130px;
    margin: auto;
    max-width: 1300px;
  }
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
