import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { TextField } from '../TextField/TextField';

const meta = {
  title: 'Example/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'name',
    label: 'Name',
    type: 'text',
    error: false,
  },
};

export const Error: Story = {
  args: {
    id: 'name',
    label: 'Name',
    type: 'text',
    error: true,
  },
};
