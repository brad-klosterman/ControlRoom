import { useContext } from 'react';

import Toaster from 'context/toaster';

interface AlertOptions {
  timeout?: number;
  id?: number | string;
}

const useResponseStatus = (props?: { id?: string }) => {
  const toaster = useContext(Toaster.Context);

  const successAlert = (message: string, options?: AlertOptions) => {
    toaster.add({
      content: message,
      id: options?.id
        ? options?.id.toString()
        : props?.id
        ? props.id
        : '' + message,
      title: 'SUCCESS',
      variant: 'success',
      timeout: options?.timeout,
    });
  };

  const errorAlert = (message: string, options?: AlertOptions) => {
    toaster.add({
      content: message,
      id: options?.id
        ? options?.id.toString()
        : props?.id
        ? props.id
        : '' + message,
      title: 'ERROR',
      variant: 'error',
      timeout: options?.timeout,
    });
  };

  const incomingAlert = (message: string, options?: AlertOptions) => {
    toaster.add({
      content: message,
      id: options?.id
        ? options?.id.toString()
        : props?.id
        ? props.id
        : '' + message,
      title: 'INCOMING',
      variant: 'critical',
      timeout: options?.timeout,
    });
  };

  const onResponse = (success: boolean | null | undefined, message: string) => {
    if (success) {
      successAlert(`SUCCESS ${message}`);
    } else {
      errorAlert(`ERROR ${message}`);
    }
  };

  const dismiss = (id: string) => {
    toaster.dismiss(id);
  };

  return {
    errorAlert,
    incomingAlert,
    successAlert,
    onResponse,
    dismiss,
  };
};

export default useResponseStatus;
