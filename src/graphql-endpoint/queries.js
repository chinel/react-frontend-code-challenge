import { gql } from "@apollo/client";

export const GET_METRICS = gql`
  query getMetrics {
    metric(order_by: { created_at: asc }) {
      title
      total
      id
    }
  }
`;
