import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  DefaultOptions,
  from,
  InMemoryCache,
  NormalizedCacheObject,
  split,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { getMainDefinition } from '@apollo/client/utilities';
import { RestLink } from 'apollo-link-rest';

import { AuthSessionStorage } from 'src/app.state/auth/auth.session.storage';

import {
  API_ROOT,
  MIS_ROOT,
  SERV_CRAFT_API,
  ANALYTICS_ROOT,
} from './endpoints';
import { wsLink } from './wsLink';

export const buildLinks = ({
  gateway,
  subscriptions,
}: {
  gateway: string;
  subscriptions: string;
}): ApolloLink => {
  const httpLink = createHttpLink({
    uri: () => {
      return gateway;
    },
  });

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink(subscriptions),
    httpLink,
  );

  const didEncounterError = (error: any) => {
    const status = error.statusCode ? error.statusCode : null;

    switch (status) {
      case 401: {
        break;
      }
      case 403:
        break;
      case 502:
        break;
      default:
    }
  };

  const errorLink = onError(({ graphQLErrors, networkError, response }) => {
    if (graphQLErrors) {
      graphQLErrors.map(graphqlError => {
        console.error(`[GraphQL ERROR MESSAGE]: ${graphqlError.message}`);
        console.error(`[GraphQL ERROR SOURCE]: ${graphqlError.source}`);
        console.error(`[GraphQL ERROR POSITION]: ${graphqlError.positions}`);
        console.error(`[GraphQL ERROR PATH]: ${graphqlError.path}`);
        console.error(`[GraphQL ERROR RESPONSE]: ${response}`);
        return response;
      });
    }

    if (networkError) {
      console.error(`[Network Error]: ${networkError}`);
      didEncounterError(networkError);
    }
  });

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }: { headers: any }) => {
      const session_auth = AuthSessionStorage.getAuthHeaders();
      const session_user = AuthSessionStorage.getUser();

      // TODO
      // Do we really need all of these headers?
      return {
        headers: {
          ...headers,
          Accept: 'application/json',
          'access-token': session_auth?.token,
          'agent-id': session_user?.id?.toString(),
          client: session_auth?.client,
          expiry: session_auth?.expiry,
          'ssp-id': session_user?.ssp_settings.ssp_id.toString(),
          'token-type': 'Bearer',
          uid: session_auth?.uid,
        },
      };
    });

    return forward(operation).map(result => {
      // const context = operation.getContext()
      return result;
    });
  });

  const restLink = new RestLink({
    endpoints: {
      analytics: `${API_ROOT}${ANALYTICS_ROOT}`,
      Base: `${API_ROOT}/v3/service_provider`,
      CompanyHistory: {
        responseTransformer: async response =>
          response.json().then((data: any) => {
            if ('history' in data) {
              return {
                results: data.history,
                totalResults: data.pagination.count,
              };
            }

            return data;
          }),
        uri: `${API_ROOT}${MIS_ROOT}/companies`,
      },
      JobCards: {
        responseTransformer: async response =>
          response.json().then((data: any) => {
            if ('jobHistories' in data) {
              return {
                results: data.jobHistories,
                totalResults: data.jobHistories?.length,
              };
            }

            return data;
          }),
        uri: `${SERV_CRAFT_API}/v1/JobHistory`,
      },
      Mis: `${API_ROOT}${MIS_ROOT}`,
      Offline: `${API_ROOT}/v3/offline`,
      Settings: `${API_ROOT}/v3/service_provider/company/info`,
      Billing: `${API_ROOT}/v3/service_provider/mis/billing`,
      Companies: `${API_ROOT}${MIS_ROOT}/companies`,
    },
    uri: API_ROOT,
  });

  return from([authLink, errorLink, restLink, splitLink]);
};

const defaultOptions: DefaultOptions = {
  query: {
    errorPolicy: 'ignore',
    fetchPolicy: 'no-cache',
  },
  watchQuery: {
    errorPolicy: 'ignore',
    fetchPolicy: 'no-cache',
  },
};

export interface BuildApolloClientParams {
  gateway_link: string;
  subscriptions_link: string;
}

export const buildApolloClient = ({
  gateway_link,
  subscriptions_link,
}: BuildApolloClientParams) => {
  return new ApolloClient<NormalizedCacheObject>({
    cache: new InMemoryCache(),
    defaultOptions,
    link: buildLinks({
      gateway: gateway_link,
      subscriptions: subscriptions_link,
    }),
  });
};
