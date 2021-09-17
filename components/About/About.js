import SectionHeader from '../SectionHeader';

export default function About({ about }) {
  return (
    <section>
      <SectionHeader header={'About Me'} subheader={about} />
    </section>
  );
}

export const QUERY_ABOUT = `
  query {
    about {
      about
    }
  }
`;
