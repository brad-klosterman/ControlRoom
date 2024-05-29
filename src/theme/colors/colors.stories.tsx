import type { Meta, Story } from '@storybook/react';

import styled, { css } from 'styled-components';

const Container = styled.div(
  ({ theme }) => css`
    flex-direction: row;
    display: flex;
    width: 100%;
    padding: 100px 100px 20px 100px;
    background: ${theme.colors.bg[900]};
  `,
);

const Box = styled.div<{ color: string; shade: number }>(
  ({ color, shade, theme }) => css`
    width: 200px;
    height: 200px;
    flex-direction: row;
    display: flex;
    background: ${theme.colors[color][shade]};
  `,
);

const Colors = () => {
  return (
    <>
      <Container>
        <Box color="base" shade={900}></Box>
        <Box color="base" shade={800}></Box>
        <Box color="base" shade={700}></Box>
        <Box color="base" shade={600}></Box>
        <Box color="base" shade={500}></Box>
        <Box color="base" shade={400}></Box>
        <Box color="base" shade={300}></Box>
        <Box color="base" shade={200}></Box>
        <Box color="base" shade={100}></Box>
      </Container>
      <Container>
        <Box color="primary" shade={500}></Box>
        <Box color="warning" shade={500}></Box>
        <Box color="error" shade={500}></Box>
      </Container>
      <Container>
        <Box color="primary" shade={100}></Box>
        <Box color="primary" shade={200}></Box>
        <Box color="primary" shade={300}></Box>
        <Box color="primary" shade={400}></Box>
        <Box color="primary" shade={500}></Box>
        <Box color="primary" shade={600}></Box>
        <Box color="primary" shade={700}></Box>
        <Box color="primary" shade={800}></Box>
        <Box color="primary" shade={900}></Box>
      </Container>
    </>
  );
};

export default {
  component: Colors,
  title: 'Theme/Colors',
} as Meta;

export const Default: Story = () => <Colors />;
