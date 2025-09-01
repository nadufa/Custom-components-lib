import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Switch } from '../Switch/Switch';

const meta = {
  title: 'Example/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    id: 'name',
    checked: true,
    onChange: () => console.log('hope'),
    disabled: false,
  },
};

export const NotChecked: Story = {
  args: {
    id: 'name',
    checked: false,
    onChange: () => console.log('hope'),
    disabled: false,
  },
};

export const DisabledChecked: Story = {
  args: {
    id: 'name',
    checked: true,
    onChange: () => console.log('hope'),
    disabled: true,
  },
};

export const DisabledNotChecked: Story = {
  args: {
    id: 'name',
    checked: false,
    onChange: () => console.log('hope'),
    disabled: true,
  },
};
