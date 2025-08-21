import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { Button } from "../Button/Button";

const meta = {
  title: "Example/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MyButton: Story = {
  args: {},
};
