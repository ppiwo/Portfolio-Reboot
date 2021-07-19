import Navigation from 'components/Navigation/Navigation';

export default function Layout({ children }) {
  return (
    <div className='container'>
      <Navigation navContent={children.props.nav} />
      <main>{children}</main>
    </div>
  );
}
