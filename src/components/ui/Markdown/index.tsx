import MarkdownToJsx from 'markdown-to-jsx';

import * as S from './styles';
import Text from '../Text';
import Title from '../Title';

type MarkdownToJSXProps = Parameters<typeof MarkdownToJsx>[0];

export interface MarkdownProps extends MarkdownToJSXProps {
  isLongForm?: boolean;
}

const Markdown: React.FC<MarkdownProps> = ({
  children,
  isLongForm = false,
  options,
}) => (
  <S.Wrapper isLongForm={isLongForm}>
    <MarkdownToJsx
      options={{
        wrapper: 'span',
        ...options,
        // The spread at the end of the overrides object is valid
        // but throws a type error for unknown reason
        /* eslint-disable-next-line */
        // @ts-ignore
        overrides: {
          h1: {
            component: Title,
            props: {
              as: 'h1',
              size: 'displayLarge',
            },
          },
          h2: {
            component: Title,
            props: {
              as: 'h2',
              size: 'displayRegular',
            },
          },
          h3: {
            component: Title,
            props: {
              as: 'h3',
              size: 'displaySmall',
            },
          },
          h4: {
            component: Title,
            props: {
              as: 'h4',
              size: 'regular',
            },
          },
          h5: {
            component: Title,
            props: {
              as: 'h5',
              size: 'labelLarge',
            },
          },
          h6: {
            component: Title,
            props: {
              as: 'h6',
              size: 'labelRegular',
            },
          },
          p: {
            component: Text,
          },
          ...(options?.overrides ?? {}),
        },
      }}
    >
      {children}
    </MarkdownToJsx>
  </S.Wrapper>
);

export default Markdown;
