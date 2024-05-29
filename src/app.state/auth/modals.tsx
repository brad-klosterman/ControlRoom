import { ModalContent } from 'components/ui/Modal/types';
import { ForcedLogoutType } from 'src/app.state/auth/types';

export const getForcedLogoutModal = (
  logout_type: ForcedLogoutType,
): ModalContent<never> => ({
  title: 'YOU HAVE BEEN LOGGED OUT',
  subtitle: {
    UN_AUTHENTICATED: 'Your session has expired or you have been logged out.',
    LOST_PAGE_FOCUS:
      'Your browser tab has lost focus due to switching to other tabs.',
  }[logout_type],
  actions: [{ type: 'cancel', text: 'OK' }],
});
