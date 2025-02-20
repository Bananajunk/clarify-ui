import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Click me" },
};

export const Secondary: Story = {
  args: {
    children: "Click me",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Click me",
    variant: "tertiary",
  },
};
