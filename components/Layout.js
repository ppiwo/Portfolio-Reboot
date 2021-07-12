import Navigation from './Navigation/Navigation';

export default function Layout({ children }) {
  return (
    <div className='container'>
      <Navigation navContent={children.props.nav.data.navigation} />
      <main>{children}</main>
    </div>
  );
}
