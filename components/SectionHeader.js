export default function SectionHeader({ mainHeader, ...headerProps }) {
  // If mainHeader is true, it's a hero section, use H1
  return mainHeader && mainHeader == true ? (
    <header>
      <h1>{headerProps.header}</h1>
      <p>{headerProps.subheader}</p>
    </header>
  ) : (
    <header>
      <h2>{headerProps.header}</h2>
      <p>{headerProps.subheader}</p>
    </header>
  );
}
SectionHeader.defaultProps = {
  mainHeader: null
};
