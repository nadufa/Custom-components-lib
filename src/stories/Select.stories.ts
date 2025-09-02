import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Select } from '../components';

const meta = {
  title: 'Example/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'name',
    label: 'Fruit',
    options: ['banana', 'pineapple', 'melon'],
    error: false,
  },
};

export const Error: Story = {
  args: {
    id: 'name',
    label: 'Fruit',
    options: ['banana', 'pineapple', 'melon'],
    error: true,
  },
};
