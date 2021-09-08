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
  @media (min-width: 992px) {
    margin-top: 250px;
  }
`;

export default function Contact({
  contact: { header, subheader, contactMethod }
}) {
  return (
    <Section>
      <SectionHeader
        header={header}
        subheader={subheader}
        marginBottom={'0'}
        center
      />
      <ListIconButtons icons={contactMethod} align={'center'} />
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
