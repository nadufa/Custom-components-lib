import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Button } from '../components/Button/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallText: Story = {
  args: {
    size: 'small',
    variant: 'text',
    children: 'SMALL',
  },
};

export const MediumText: Story = {
  args: {
    size: 'medium',
    variant: 'text',
    children: 'MEDIUM',
  },
};

export const LargeText: Story = {
  args: {
    size: 'large',
    variant: 'text',
    children: 'LARGE',
  },
};

export const SmallOutlined: Story = {
  args: {
    size: 'small',
    variant: 'outlined',
    children: 'SMALL',
  },
};

export const MediumOutlined: Story = {
  args: {
    size: 'medium',
    variant: 'outlined',
    children: 'MEDIUM',
  },
};

export const LargeOutlined: Story = {
  args: {
    size: 'large',
    variant: 'outlined',
    children: 'LARGE',
  },
};

export const SmallContained: Story = {
  args: {
    size: 'small',
    variant: 'contained',
    children: 'SMALL',
  },
};

export const MediumContained: Story = {
  args: {
    size: 'medium',
    variant: 'contained',
    children: 'MEDIUM',
  },
};

export const LargeContained: Story = {
  args: {
    size: 'large',
    variant: 'contained',
    children: 'LARGE',
  },
};
