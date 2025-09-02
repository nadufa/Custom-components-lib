import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { Button } from '../components';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallText: Story = {
  args: {
    size: 'small',
    variant: 'text',
    children: <span>SMALL</span>,
    onClick: fn(),
  },
};

export const MediumText: Story = {
  args: {
    size: 'medium',
    variant: 'text',
    children: <span>MEDIUM</span>,
    onClick: fn(),
  },
};

export const LargeText: Story = {
  args: {
    size: 'large',
    variant: 'text',
    children: <span>LARGE</span>,
    onClick: fn(),
  },
};

export const SmallOutlined: Story = {
  args: {
    size: 'small',
    variant: 'outlined',
    children: <span>SMALL</span>,
    onClick: fn(),
  },
};

export const MediumOutlined: Story = {
  args: {
    size: 'medium',
    variant: 'outlined',
    children: <span>MEDIUM</span>,
    onClick: fn(),
  },
};

export const LargeOutlined: Story = {
  args: {
    size: 'large',
    variant: 'outlined',
    children: <span>LARGE</span>,
    onClick: fn(),
  },
};

export const SmallContained: Story = {
  args: {
    size: 'small',
    variant: 'contained',
    children: <span>SMALL</span>,
    onClick: fn(),
  },
};

export const MediumContained: Story = {
  args: {
    size: 'medium',
    variant: 'contained',
    children: <span>MEDIUM</span>,
    onClick: fn(),
  },
};

export const LargeContained: Story = {
  args: {
    size: 'large',
    variant: 'contained',
    children: <span>LARGE</span>,
    onClick: fn(),
  },
};
