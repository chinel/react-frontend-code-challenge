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

export const GET_MODULE_HISTORY = gql`
  query getModuleHistory {
    module_history(order_by: { created_at: asc }) {
      date
      description
      id
      source
    }
  }
`;

export const GET_REPORTS = gql`
  query getReports {
    report(order_by: { created_at: asc }) {
      address
      created_at
      entries
      entry_type
      id
      issues
      name
      risk
      state
    }
  }
`;
