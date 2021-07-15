import ListIconButtons from '../ListIconButtons';
import SectionHeader from 'components/SectionHeader';
import { gql } from '@apollo/client';

export default function Contact({ contact }) {
  return (
  <section>
      <SectionHeader header={contact.Header} subheader={contact.Subheader}/>
      <ListIconButtons icons={contact['contact_method']} />
  </section>
  );
}

export const QUERY_CONTACT = gql`
  query contact {
    contacts {
      Header
      Subheader
      contact_method {
        id
        label
        link
        logo {
          url
          alternativeText
        }
      }
      qr_code {
        url
        alternativeText
      }
    }
  }
`;
