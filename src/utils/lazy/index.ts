enum LazyState {
  ERROR = 'ERROR',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  UN_INITIALIZED = 'UN_INITIALIZED',
}

export interface LazyNonSuccess<T> {
  readonly state:
    | LazyState.UN_INITIALIZED
    | LazyState.LOADING
    | LazyState.ERROR;
  readonly data?: T;
}
export interface LazySuccess<T> {
  readonly state: LazyState.SUCCESS;
  readonly data: T;
}

export type Lazy<T> = LazyNonSuccess<T> | LazySuccess<T>;

export interface LazyStrict<T> {
  readonly state: LazyState;
  readonly data: T;
}

export { LazyState };
