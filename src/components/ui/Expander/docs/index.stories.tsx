import type { Story } from '@storybook/react';
import { useRef, useState } from 'react';

import { cssModule } from 'auxiliary';
import { Flex, Icon, Text } from 'components/ui';
import { Expander } from 'components/ui/Expander';
import styled, { css } from 'styled-components';

import { ExpandMore, InnerExpandMore } from '../src/ExpandMore/ExpandMore';

const Trigger = styled(Flex).attrs(() => ({
  alignItems: 'center',
  justifyContent: 'space-between',
}))`
  background: ${({ theme }) => theme.colors.background[200]};
  padding: ${({ theme }) => theme.space.regular};
`;

const Content = styled(Flex).attrs(() => ({}))`
  background: ${({ theme }) => theme.colors.background[300]};
  padding: ${({ theme }) => theme.space.regular};
  height: 300px;
`;

export default {
  component: Expander,
  title: 'Components/Expander',
};

export const Main: Story = () => (
  <Expander aria-label="SEONExpander">
    <Flex>
      <Trigger>
        <Expander.Arrow />
      </Trigger>
      <Content>CONTENT</Content>
    </Flex>
    <Flex>
      <Trigger>
        <Expander.Arrow />
      </Trigger>
      <Content>CONTENT 2</Content>
    </Flex>
  </Expander>
);

export const Gap: Story = () => (
  <Expander.Node>
    <Trigger>
      <Expander.Arrow />
    </Trigger>
    <Content>CONTENT 2</Content>
  </Expander.Node>
);

const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    border-radius: 4px;
    .expanded-content {
      overflow-y: hidden;
      width: 100%;
      min-height: 6rem;
      border: 2rem solid ${theme.colors.base[400]};
      background: ${theme.colors.base[400]};
    }
    .expanded-content-collapsed {
      height: 8rem;
    }

    .expanded-content-expanding {
      overflow-y: hidden;
    }
    .expanded-content-collapsing {
      // overflow-y: hidden;
    }
    .expander-arrow {
      flex-shrink: 0;
      transition: transform 0.15s linear;
    }
    .expander-arrow-up {
      transform: rotate(-180deg);
    }
  `,
);

const FlexContent = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 20rem;
    gap: ${theme.space.xLarge};
    background: ${theme.colors.base[100]};
  `,
);

export const Instructions: Story = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const refContainer = useRef<HTMLDivElement>();

  return (
    <Container>
      <InnerExpandMore
        collapsed_height="8rem"
        forwardedRef={refContainer}
        open={expanded}
      >
        <FlexContent>
          <Text>LINE 1</Text>
          <Text>LINE 2</Text>
          <Text>LINE 3</Text>
        </FlexContent>
      </InnerExpandMore>
      <Icon.ArrowDown
        className={cssModule('expander-arrow', expanded ? 'up' : 'down')}
        onClick={() => setExpanded(prev => !prev)}
        style={{ bottom: '1rem', position: 'absolute', right: '1rem' }}
        // colorKey="secondary"
      />
    </Container>
  );
};

export const InstructionsForward: Story = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <ExpandMore collapsed_height="8rem" open={expanded}>
      <Container>
        <FlexContent>
          <Text>LINE 1</Text>
          <Text>LINE 2</Text>
          <Text>LINE 3</Text>
        </FlexContent>
        <Icon.ArrowDown
          className={cssModule('arrow', expanded ? 'up' : 'down')}
          onClick={() => setExpanded(prev => !prev)}
          style={{ bottom: '1rem', position: 'absolute', right: '1rem' }}
          // colorKey="secondary"
        />
      </Container>
    </ExpandMore>
  );
};
