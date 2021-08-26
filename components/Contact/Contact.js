import ListIconButtons from '../ListIconButtons';
import PropTypes from 'prop-types';
import SectionHeader from 'components/SectionHeader';
import { gql } from '@apollo/client';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 0;
  text-align: center;
  header {
    margin: auto;
  }
`;

export default function Contact({ contact, contact: { Header, Subheader } }) {
  return (
    <Section>
      <SectionHeader
        header={Header}
        subheader={Subheader}
        marginBottom={'0'}
        center
      />
      <ListIconButtons icons={contact['contact_method']} align={'center'} />
    </Section>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export const QUERY_CONTACT = gql`
  query Contact {
    contact {
      header
      subheader
      contactMethod {
        id
        label
        link
        logo {
          url
          alternativeText
        }
      }
    }
  }
`;
