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

export const GET_DIVISION_SUMMARY = gql`
  query getDivision {
    division_summary {
      address
      email
      fingerprints
      id
      journals
      phone
    }
  }
`;
