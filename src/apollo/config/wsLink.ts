import { ApolloLink, FetchResult, Observable, Operation } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { GraphQLError, print } from 'graphql';
import { Client, ClientOptions, createClient } from 'graphql-ws';

import { AuthSessionStorage } from 'src/app.state/auth/auth.session.storage';

class WebSocketLink extends ApolloLink {
  private client: Client;

  constructor(options: ClientOptions) {
    super();
    this.client = createClient(options);
  }

  public request(operation: Operation): Observable<FetchResult> {
    return new Observable(sink => {
      return this.client.subscribe<FetchResult>(
        { ...operation, query: print(operation.query) },
        {
          complete: sink.complete.bind(sink),
          error: err => {
            // eslint-disable-next-line no-console
            console.log('WS REQUEST ERROR', err);

            if (err instanceof Error) {
              return sink.error(err);
            }

            if (err instanceof CloseEvent) {
              return sink.error(
                // reason will be available on clean closes
                new Error(
                  `Socket closed with event ${err} ${err.reason || ''}`,
                ),
              );
            }

            return sink.error(
              new Error(
                (err as GraphQLError[])
                  .map(({ message }) => message)
                  .join(', '),
              ),
            );
          },
          next: sink.next.bind(sink),
        },
      );
    });
  }
}

export const wsLink = (url: string) =>
  new WebSocketLink({
    connectionParams: () => {
      const session_auth = AuthSessionStorage.getAuthHeaders();
      const session_user = AuthSessionStorage.getUser();

      // TODO
      // Do we really need all of these headers?
      const headers = {
        Accept: 'application/json',
        'access-token': session_auth?.token,
        'agent-id': session_user?.id.toString(),
        client: session_auth?.client,
        expiry: session_auth?.expiry,
        'ssp-id': session_user?.ssp_settings.ssp_id.toString(),
        'token-type': 'Bearer',
        uid: session_auth?.uid,
      };

      return {
        ...headers,
      };
    },
    keepAlive: undefined,
    url,
  });

export const wsLinkBuilder = (url: string) =>
  new GraphQLWsLink(
    createClient({
      connectionParams: () => {
        const session_auth = AuthSessionStorage.getAuthHeaders();
        const session_user = AuthSessionStorage.getUser();

        // TODO
        // Do we really need all of these headers?
        const headers = {
          Accept: 'application/json',
          'access-token': session_auth?.token,
          agent: JSON.stringify(session_user),
          'agent-id': session_user?.id.toString(),
          client: session_auth?.client,
          expiry: session_auth?.expiry,
          'ssp-id': session_user?.ssp_settings.ssp_id.toString(),
          'token-type': 'Bearer',
          uid: session_auth?.uid,
        };

        return {
          ...headers,
        };
      },
      url,
    }),
  );
