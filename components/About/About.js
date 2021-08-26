import SectionHeader from '../SectionHeader';
import { gql } from '@apollo/client';

export default function About({about}) {
    return (
        <section>
            <SectionHeader header={'About Me'} subheader={about} />
        </section>
    );
}

export const QUERY_ABOUT = gql`
    query {
        about {
            about
        }
    }
`;
