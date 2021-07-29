import styled from 'styled-components';

const Container = styled.div`
  margin: 0 16px;
  // Tablet Vertical
  @media (min-width: 768px) and (max-width: 991.98px) {
    margin: 0 32px;
  }
  @media (min-width: 992px) {
    margin: 0 120px;
    max-width: 1200px;
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
