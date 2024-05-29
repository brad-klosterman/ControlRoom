import type { Meta, Story } from '@storybook/react';

import Markdown from '.';
import type { MarkdownProps } from '.';

const Template: Story<MarkdownProps> = args => <Markdown {...args} />;

export const Default = Template.bind({});

Default.args = {
  children:
    '# Heading h1\n\nParagraph\n\n## Heading h2\n\nParagraph\n\n### Heading h3\n\nParagraph\n\n#### Heading h4\n\nParagraph\n\n##### Heading h5\n\nParagraph\n\n###### Heading h6\n\nParagraph\n\nParagraph with [a link](/)\n\n - List item 1\n - List item 2',
};

export default {
  component: Markdown,
  title: 'components/Markdown',
} as Meta;
