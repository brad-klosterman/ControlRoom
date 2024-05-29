import { gql } from '@apollo/client';

export const FETCH_JOB_CARDS = gql`
  query fetch_job_cards($servcraft_company_api_key: String!) {
    fetch_job_cards(servcraft_company_api_key: $servcraft_company_api_key)
      @rest(
        path: "?={args.servcraft_company_api_key}/&pageSize=100"
        endpoint: "JobCards"
      ) {
      results
      totalResults
    }
  }
`;
