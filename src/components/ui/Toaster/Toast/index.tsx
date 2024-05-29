import { useEffect, useMemo, useState, FC } from 'react';

import { useToasterContext } from 'hooks';

import * as S from './styles';
import Button from '../../Button';
import IconButton from '../../IconButton';
import Text from '../../Text';

export interface ToastProps {
  actions?: {
    handleClick: (value?: any) => any;
    title: string;
  }[];
  content?: string;
  id: string;
  timeout?: number;
  title: string;
  variant?: 'critical' | 'error' | 'info' | 'success';
}

const Toast: FC<ToastProps> = ({
  actions,
  content,
  id,
  timeout = 6000,
  title,
  variant = 'info',
}) => {
  const { dismiss } = useToasterContext();
  const [timeoutStarted, setTimeoutStarted] = useState(false);

  const buttonVariant = useMemo(() => {
    switch (variant) {
      case 'info':
        return 'secondary';
      case 'error':
      case 'critical':
        return 'dangerous';
      case 'success':
        return 'success';
      default:
        return 'secondary';
    }
  }, [variant]);

  useEffect(() => {
    if (timeout) {
      setTimeoutStarted(true);
      setTimeout(() => dismiss(id), timeout);
    }
  }, [dismiss, id, timeout]);

  return (
    <S.Wrapper
      timeout={timeout}
      timeoutstarted={timeoutStarted.toString()}
      variant={variant}
    >
      <Text isBold margin={{ bottom: 'xSmall' }} size="displaySmall">
        {title}
      </Text>
      {content && <Text>{content.toUpperCase()}</Text>}
      {!!actions?.length && (
        <S.Actions>
          {actions.map(action => (
            <Button
              key={action.title}
              onClick={action.handleClick}
              size="small"
              variant={buttonVariant}
            >
              {action.title}
            </Button>
          ))}
        </S.Actions>
      )}
      <S.CloseButton>
        <IconButton.Cross
          label="Close"
          onClick={() => dismiss(id)}
          variant="secondary"
        />
      </S.CloseButton>
    </S.Wrapper>
  );
};

export default Toast;
