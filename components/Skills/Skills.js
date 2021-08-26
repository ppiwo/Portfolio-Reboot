import ListCategories from 'components/Skills/ListCategories';
import SectionHeader from 'components/SectionHeader';
import { gql } from '@apollo/client';

export default function Skills({
  skills: { header, subheader, skillCategory }
}) {
  return (
    <section id='skills'>
      <SectionHeader header={header} subheader={subheader} />
      <ListCategories skillCategories={skillCategory} />
    </section>
  );
}

export const QUERY_SKILLS = gql`
  query Skills {
    skill {
      header
      subheader
      skillCategory {
        id
        title
        skillBlock {
          id
          logo {
            url
            alternativeText
          }
          text
        }
      }
    }
  }
`;
