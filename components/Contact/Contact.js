import ListIconButtons from '../ListIconButtons';
import SectionHeader from 'components/SectionHeader';
import { gql } from '@apollo/client';

export default function Contact({ contact, contact: { Header, Subheader } }) {

  return (
    <section id="contact">
      <SectionHeader header={Header} subheader={Subheader} />
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
