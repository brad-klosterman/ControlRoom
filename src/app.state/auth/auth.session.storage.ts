import { SEON_AUTH_HEADERS } from 'codegen/graphql';
import { UserStoredSession } from 'src/app.state/auth/types';
import { SimpleSessionStorage } from 'utils/simpleSessionStorage';

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace AuthSessionStorage {
  export const getUser = (): UserStoredSession | undefined => {
    return SimpleSessionStorage.getItem('seon-user');
  };
  export const setUser = (user: UserStoredSession | undefined): void => {
    SimpleSessionStorage.setItem('seon-user', user);
  };

  export const getAuthHeaders = (): SEON_AUTH_HEADERS | undefined => {
    return SimpleSessionStorage.getItem('seon-auth-headers');
  };

  export const setAuthHeaders = (
    seon_auth_headers: SEON_AUTH_HEADERS | undefined,
  ): void => {
    SimpleSessionStorage.setItem('seon-auth-headers', seon_auth_headers);
  };

  // TODO
  // Why is this saved in the session?
  // If this is necessary, it should be in another place, as it isn't user related
  export const getAgentAreas = (): Array<number> | undefined => {
    return SimpleSessionStorage.getItem('user-areas');
  };
  export const setAgentAreas = (user_area_ids: Array<number> | undefined) => {
    SimpleSessionStorage.setItem('user-areas', user_area_ids);
  };

  export const clear = (): void => {
    console.log('clear');
    setUser(undefined);
    setAuthHeaders(undefined);
    setAgentAreas(undefined);
  };
}

export { AuthSessionStorage };
