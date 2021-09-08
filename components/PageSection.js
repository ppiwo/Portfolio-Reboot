import SectionHeader from 'components/SectionHeader';

export default function PageSection({
  header,
  subheader,
  children,
  textContent,
  marginBottom
}) {
  return (
    <section>
      <SectionHeader
        header={header}
        subheader={subheader}
        marginBottom={marginBottom}
      />
      {children}
      <p>{textContent}</p>
    </section>
  );
}
