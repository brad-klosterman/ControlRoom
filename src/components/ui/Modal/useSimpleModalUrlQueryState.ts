import { useUrlQueryState } from 'utils/useUrlQueryState';
import { SimpleModalState } from './useSimpleModalState';

/**
 * Easily open and close SimpleModal's via URL query state so that refreshing
 * will automatically keep the modal open.
 *
 * NOTE: *Only* use this if it is desired to have both the modal stay open upon refresh
 * and allow copied links to also automatically open the modal.
 *
 * @param unique_identifier
 *    The unique identifier of this modal.
 *    The final URL key will be appended with `-is-open` to provide clarity.
 *    E.G. – "confirmation-dialog" The final url key would then be `...&confirmation-dialog-is-open=true`
 *    **NOTE**: It is very important that this identifier is unique and deterministic, or else unforeseen consequences
 *    could arise...
 * @returns The SimpleModalState to allow control over opening and closing
 */
const useSimpleModalUrlQueryState = (
  unique_identifier: string,
): SimpleModalState => {
  const [is_open, setIsOpen] = useUrlQueryState<boolean>(
    `${unique_identifier}-is-open`,
  );

  const open = (): void => {
    setIsOpen(true);
  };

  const close = (): void => {
    setIsOpen(undefined);
  };

  return {
    is_open: is_open ?? false,
    open,
    close,
  };
};

export { useSimpleModalUrlQueryState };
