import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Checkbox } from '../components';

const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'choice',
    label: 'Fruit',
  },
};

export const Disabled: Story = {
  args: {
    id: 'choice',
    label: 'Vegetable',
    disabled: true,
  },
};
