export const getErrorMessage = (error: any) => {
  let message = error?.graphQLErrors?.[0]?.extensions?.response?.body?.message;

  if (!message) {
    message =
      error?.graphQLErrors?.[0]?.extensions?.response?.body?.errors?.[0];
  }

  if (typeof message === 'string') {
    return message.toUpperCase();
  }

  return null;
};
