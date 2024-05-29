import {
  LOGIN_MUTATION_VARIABLES,
  PERMISSION,
  USER,
  USER_SSP_SETTINGS,
} from 'codegen/graphql';

export type AuthProviderState = UserNotPresentState | UserAuthenticatedState;

export type UserAuthenticationStatus =
  | 'LOADING'
  | 'UN_AUTHENTICATED'
  | 'AUTHENTICATED';

export interface UserAuthenticationBaseState {
  user?: USER;
  ssp_settings?: USER_SSP_SETTINGS;
  permissions?: PERMISSION[];
  auth_status: UserAuthenticationStatus;
}

export interface UserNotPresentState extends UserAuthenticationBaseState {
  auth_status: 'LOADING' | 'UN_AUTHENTICATED';
}

export interface UserAuthenticatedState extends UserAuthenticationBaseState {
  user: USER;
  ssp_settings: USER_SSP_SETTINGS;
  permissions: PERMISSION[];
  auth_status: 'AUTHENTICATED';
}

export interface AuthProviderActions {
  logout: (forced?: ForcedLogoutType) => Promise<void>;
  login: (params: LOGIN_MUTATION_VARIABLES) => Promise<void>;
}

export type ForcedLogoutType = 'UN_AUTHENTICATED' | 'LOST_PAGE_FOCUS';

export type UserStoredSession = USER & { ssp_settings: USER_SSP_SETTINGS };
