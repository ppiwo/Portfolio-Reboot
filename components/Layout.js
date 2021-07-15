import Navigation from 'components/Navigation/Navigation';

export default function Layout({ children }) {
  // don't show navigation on error pages
  // TODO Add custom 404 with fallback nav
  const errorPage = children ? true : false;

  if (errorPage) {
    return <main>{children}</main>;
  } else {
    return (
      <div className='container'>
        <Navigation navContent={children.props.nav.data.navigation | null} />
        <main>{children}</main>
      </div>
    );
  }
}
