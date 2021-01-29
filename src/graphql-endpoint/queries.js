import { gql } from "@apollo/client";

export const GET_METRICS = gql`
  query getMetrics {
    metric {
      failed
      id
      missed
      ongoing
      past
      pending
    }
  }
`;
