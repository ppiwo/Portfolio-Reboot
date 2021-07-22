import ListCategories from 'components/Skills/ListCategories';
import SectionHeader from 'components/SectionHeader';
import { gql } from '@apollo/client';

export default function Skills({ skills }) {
  // Sanitize data from API
  skills = skills[0];
  return (
    <section id='skills'>
      <SectionHeader header={skills.Header} subheader={skills.Subheader} />
      <ListCategories skillCategories={skills['skills_category']} />
    </section>
  );
}

export const QUERY_SKILLS = gql`
  query {
    skills {
      Header
      Subheader
      skills_category {
        id
        title
        skill_block {
          id
          Logo {
            url
            alternativeText
          }
          Text
          hex_code
        }
      }
    }
  }
`;
