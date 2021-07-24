import ListIconButtons from '../ListIconButtons';
import SectionHeader from 'components/SectionHeader';
import { gql } from '@apollo/client';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 0;
  text-align: center;
`;

export default function Contact({ contact, contact: { Header, Subheader } }) {
  return (
    <Section>
      <SectionHeader header={Header} subheader={Subheader} marginBottom={'0'} />
      <ListIconButtons icons={contact['contact_method']} align={'center'} />
    </Section>
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
