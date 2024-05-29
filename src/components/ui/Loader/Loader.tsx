import { ComponentProps, FunctionComponent, useEffect, useState } from 'react';

import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const LoaderWrapper = styled.div<{ size?: number }>(({ size = 32 }) => ({
  animation: `${rotate360} 0.7s linear infinite`,
  borderColor: 'rgba(97, 97, 97, 0.29)',
  borderRadius: '50%',
  borderStyle: 'solid',
  borderTopColor: 'rgb(100,100,100)',
  borderWidth: 2,
  cursor: 'progress',
  display: 'inline-block',
  height: size,
  left: '50%',
  marginLeft: -(size / 2),
  marginTop: -(size / 2),
  mixBlendMode: 'difference',
  overflow: 'hidden',
  position: 'absolute',
  top: '50%',
  transition: 'all 200ms ease-out',
  verticalAlign: 'top',
  width: size,
  zIndex: 4,
}));

const ProgressWrapper = styled.div({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  position: 'absolute',
  width: '100%',
});

const ProgressTrack = styled.div(({ theme }) => ({
  background: theme.colors.outline.default,
  borderRadius: 5,
  cursor: 'progress',
  height: 5,
  marginBottom: '0.75rem',
  maxWidth: 300,
  overflow: 'hidden',
  position: 'relative',
  width: '80%',
}));

const ProgressBar = styled.div(({ theme }) => ({
  background: theme.colors.secondary[100],
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
}));

const ProgressMessage = styled.div(({ theme }) => ({
  color: theme.colors.text.primary,
  fontSize: theme.typography.fontSize.regular,
  minHeight: '2em',
}));

const ellipsis = keyframes`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`;

const Ellipsis = styled.span({
  '&::after': {
    animation: `${ellipsis} 1s linear infinite`,
    animationDelay: '1s',
    content: "'...'",
    display: 'inline-block',
    height: 'auto',
    width: '1em',
  },
});

interface Progress {
  message: string;
  modules?: {
    complete: number;
    total: number;
  };
  value: number;
}

interface LoaderProps {
  error?: unknown;
  progress?: Progress;
  size?: number;
}

export const PureLoader: FunctionComponent<
  LoaderProps & ComponentProps<typeof ProgressWrapper>
> = ({ error, progress, size, ...props }) => {
  if (error) {
    return (
      <ProgressWrapper
        aria-label={error.toString()}
        aria-live="polite"
        role="status"
        {...props}
      >
        {/* <ErrorIcon icon="lightningoff" /> */}
        <ProgressMessage>{error.toString()}</ProgressMessage>
      </ProgressWrapper>
    );
  }

  if (progress) {
    const { modules, value } = progress;
    let { message } = progress;
    if (modules) message += ` ${modules.complete} / ${modules.total} modules`;
    return (
      <ProgressWrapper
        aria-label="Content is loading..."
        aria-live="polite"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={value * 100}
        aria-valuetext={message}
        role="progressbar"
        {...props}
      >
        <ProgressTrack>
          <ProgressBar style={{ width: `${value * 100}%` }} />
        </ProgressTrack>
        <ProgressMessage>
          {message}
          {value < 1 && <Ellipsis key={message} />}
        </ProgressMessage>
      </ProgressWrapper>
    );
  }

  return (
    <LoaderWrapper
      aria-label="Content is loading..."
      aria-live="polite"
      role="status"
      size={size}
      {...props}
    />
  );
};

export const Loader: FunctionComponent<
  ComponentProps<typeof PureLoader>
> = props => {
  const [progress, setProgress] = useState<Progress | undefined>(undefined);
  const [error, setError] = useState<unknown>(undefined);

  useEffect(() => {
    // Don't listen for progress updates in static builds
    // Event source is not defined in IE 11

    const eventSource = new EventSource('/progress');
    let lastProgress: Progress;

    eventSource.onmessage = (event: any) => {
      try {
        lastProgress = JSON.parse(event.data);
        setProgress(lastProgress);
      } catch (e) {
        setError(e);
        eventSource.close();
      }
    };

    return () => eventSource.close();
  }, []);

  return <PureLoader error={error} progress={progress} {...props} />;
};
