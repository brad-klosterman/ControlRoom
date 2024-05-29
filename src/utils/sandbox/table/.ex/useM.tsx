import { useState } from 'react';

export const createUser = (
  user: {
    name: string;
    email: string;
  },
  opts?: {
    throwOnError?: boolean;
  }
): Promise<{
  id: string;
  name: string;
  email: string;
}> => {
  return fetch('/user', {
    method: 'POST',
    body: JSON.stringify(user)
  }).then(response => response.json());
};

type Mutation<TArgs extends any[], TReturn> = (
  ...args: TArgs
) => Promise<TReturn>;

interface UseMutationReturn<TArgs extends any[], TReturn> {
  mutate: Mutation<TArgs, TReturn>;
  isLoading: boolean;
}

interface UseMutationOptions<TArgs extends any[], TReturn> {
  mutation: Mutation<TArgs, TReturn>;
}

export const useMutation = <TArgs extends any[], TReturn>(
  opts: UseMutationOptions<TArgs, TReturn>
): UseMutationReturn<TArgs, TReturn> => {
  const [isLoading, setIsLoading] = useState(false);

  return {
    mutate: async (...args) => {
      setIsLoading(true);

      try {
        const result = await opts.mutation(...args);
        return result;
      } catch (e) {
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    isLoading
  };
};

const mutation = useMutation({
  mutation: createUser
});

mutation.mutate({ name: 'John Doe', email: 'john@doe.com' });

mutation.mutate({
  name: 'John Doe',
  email: 'john@doe.com'
});

/**
 * A fake router interface
 */
export interface Router {
  push: (path: string) => void;
}

/**
 * A fake useRouter hook
 */
export const useRouter = () => {
  return {
    push: (path: string) => {
      console.log(`Navigating to ${path}`);
    }
  };
};

export const withRouter = <TProps,>(
  Component: (props: TProps) => React.ReactNode
): ((props: Omit<TProps, 'router'>) => React.ReactNode) => {
  const NewComponent = (props: Omit<TProps, 'router'>) => {
    const router = useRouter();
    return <Component {...(props as TProps)} router={router} />;
  };

  return NewComponent;
};
