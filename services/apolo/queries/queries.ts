import { gql } from "@apollo/client";

export const WP_HOME_PAGE = gql`
query Countries {
  pages {
    nodes {
      title
    }
  }
}
`;
