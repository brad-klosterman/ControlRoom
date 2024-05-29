import { useLocation, useNavigate } from 'react-router-dom';

const MAX_URL_KEY_LENGTH = 50;
const MAX_STRINGIFIED_DATA_LENGTH = 500;

type UseUrlQueryStateReturn<T> = [
  T | undefined,
  (newValue: T | undefined) => void,
];

/**
 * Manage state via url query parameters. Use this for times where it is
 * desired that state remain consistent across manual refreshes and where the
 * sharing of a URL is desired to save the state of this data.
 *
 * An ideal use-case for this are scenarios where it desired to a share
 * a URL that can recreate a specific UI scene (such as modals, tab views, etc...)
 *
 * **NOTE**: This should only be used for data which is small since URLs can often
 * not be longer than 2k characters. Thus, any data whose JSON stringify is longer
 * than 500 characters will be rejected and the key removed. Only use this for
 * simple data such as booleans, strings, numbers or very simple objects. A similar
 * safety mechanism applies for the `url_key` length – which can have a maximum of
 * only 50 characters.
 *
 * @example
 * // The following results in the following URL query:
 * // `?is_modal_open=true`
 *
 * const [is_modal_open, setModalOpen] = useUrlQueryState<boolean>('is_modal_open');
 * setModalOpen(true);
 *
 * @param url_key The unique key to be saved in the url to access the data.
 *                **Important**: If there are multiple matching keys, unintended
 *                and dangerous concequences will occur.
 * @returns An array with exactly two indices:
 *          [0] – The current data or undefined
 *          [1] - A setter that takes exactly one value of either T or undefined
 */
const useUrlQueryState = <T>(url_key: string): UseUrlQueryStateReturn<T> => {
  const location = useLocation();
  const navigate = useNavigate();

  const getStringifiedData = (data: T | undefined): string | undefined => {
    if (data === undefined) {
      return undefined;
    }

    const stringified_data = JSON.stringify(data);
    if (stringified_data.length > MAX_STRINGIFIED_DATA_LENGTH) {
      console.error(
        `Error in useUrlQueryState(): Stringified data was longer than ${MAX_STRINGIFIED_DATA_LENGTH} characters (was ${stringified_data.length}). Key will be removed to ensure URL is not dangerously long...`,
      );
      return undefined;
    }

    return stringified_data;
  };

  const updateValue = (newValue: T | undefined): void => {
    if (url_key.length > MAX_URL_KEY_LENGTH) {
      console.error(
        `Error in useUrlQueryState(): Parameter key "${url_key}" was greater than ${MAX_URL_KEY_LENGTH} characters (was ${url_key.length}). Key will be removed to ensure URL is not dangerously long...`,
      );
      return;
    }

    const url_search_params = new URLSearchParams(location.search);
    const stringified_data = getStringifiedData(newValue);

    if (stringified_data === undefined) {
      url_search_params.delete(url_key);
    } else {
      url_search_params.set(url_key, stringified_data);
    }

    navigate(
      {
        pathname: location.pathname,
        search: url_search_params.toString(),
      },
      {
        replace: true,
      },
    );
  };

  const getValue = (): T | undefined => {
    const url_search_params = new URLSearchParams(location.search);
    const url_param = url_search_params.get(url_key);

    if (!url_param) {
      return undefined;
    }

    try {
      return JSON.parse(url_param);
    } catch {
      updateValue(undefined);
    }

    return undefined;
  };

  return [getValue(), updateValue];
};

export { useUrlQueryState };
