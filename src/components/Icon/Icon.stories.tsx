import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";
import { UserIcon } from "@heroicons/react/24/outline";

const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: { src: UserIcon },
  render: (args) => (
    <section className="flex flex-col gap-4 justify-center">
      <Icon {...args} size="sm" />
      <Icon {...args} size="md" />
      <Icon {...args} size="lg" />
      <Icon {...args} size="xl" />
    </section>
  ),
};
