import { graphql } from 'codegen';

export const TRACK_RESPONDERS = graphql(/* GraphQL */ `
  query track_responders {
    responders {
      ...live_responder
    }
  }
`);

export const LIVE_RESPONDER = graphql(/* GraphQL */ `
  fragment live_responder on responder {
    id
    name
    status
    position {
      longitude
      latitude
    }
    updated_on
  }
`);
