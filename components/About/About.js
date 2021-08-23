export default function About() {
    return (
        <div>
            
        </div>
    )
}

export const QUERY_ABOUT = gql`
  query {
    navigation {
      logo {
        url
        alternativeText
      }
      navlink {
        id
        title
        url
      }
    }
  }
`;
