import styled, { css } from 'styled-components';
import type { DefaultTheme } from 'styled-components';
import { truncateText } from 'theme/mixins';
import typography from 'theme/typography';
import { mapSides } from 'utils';

import Icon from '../Icon';

export interface TitleProps {
  children: string | string[];
  colorKey?: keyof DefaultTheme['colors']['text'];
  icon?: keyof typeof Icon;
  isTruncated?: boolean;
  margin?: Parameters<typeof mapSides>[0];
  size?: keyof DefaultTheme['typography']['fontSize'];
  onClick?(): void;
}

export interface ContainerProps {
  margin?: Parameters<typeof mapSides>[0];
}

export const Container = styled.div<ContainerProps>(
  ({ margin, theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.space.small};
    margin: ${margin ? mapSides(margin) : 0};
  `,
);

const Text = styled.h3<TitleProps>(
  ({
    colorKey = 'primary',
    isTruncated = false,
    margin,
    size = 'displayRegular',
    theme,
  }) => css`
    ${isTruncated && truncateText}
    margin: ${margin ? mapSides(margin) : 0};
    color: ${theme.colors.text[colorKey]};
    font-weight: ${theme.typography.fontWeight.medium};
    font-size: ${theme.typography.fontSize[size]};
  `,
);

const Title = ({ margin, ...props }: TitleProps) => {
  const RenderedIcon = props.icon && Icon[props.icon];

  return (
    <Container margin={margin} onClick={props.onClick}>
      {RenderedIcon && (
        <RenderedIcon
          colorKey={props.colorKey}
          style={{
            fontSize: typography.fontSize[props.size || 'displayRegular'],
          }}
        />
      )}
      <Text {...{ ...props }}>{props.children}</Text>
    </Container>
  );
};

export default Title;
