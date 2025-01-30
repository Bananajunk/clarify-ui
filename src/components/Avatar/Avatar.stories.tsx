import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";
import { UserIcon } from "@heroicons/react/24/outline";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Icon: Story = {
  args: { icon: UserIcon },
};

export const Initials: Story = {
  args: { initials: "LR" },
};
