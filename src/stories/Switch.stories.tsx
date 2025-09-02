import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ChangeEvent, useState } from 'react';
import { fn } from 'storybook/test';
import { Switch } from '../components';

const meta = {
  title: 'Example/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'name',
    checked: true,
    onChange: fn(),
  },
  render: ({ id, checked, onChange }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setIsChecked((prev) => !prev);
      onChange(e);
    };

    return <Switch id={id} checked={isChecked} onChange={onChangeHandler} />;
  },
};

export const DisabledChecked: Story = {
  args: {
    id: 'name',
    checked: true,
    onChange: fn(),
    disabled: true,
  },
};

export const DisabledNotChecked: Story = {
  args: {
    id: 'name',
    checked: false,
    onChange: fn(),
    disabled: true,
  },
};
