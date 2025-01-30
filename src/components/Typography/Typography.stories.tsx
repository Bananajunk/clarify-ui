import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Heading: Story = {
  args: {
    children: "Content section heading",
  },
  render: (args) => (
    <section className="flex flex-col gap-8">
      <Typography as="h1" variant="heading2Xl">
        {args.children}
      </Typography>
      <Typography as="h2" variant="headingXl">
        {args.children}
      </Typography>
      <Typography as="h3" variant="headingLg">
        {args.children}
      </Typography>
      <Typography as="h4" variant="headingMd">
        {args.children}
      </Typography>
      <Typography as="h5" variant="headingSm">
        {args.children}
      </Typography>
      <Typography as="h6" variant="headingXs">
        {args.children}
      </Typography>
    </section>
  ),
};

export const Body: Story = {
  args: {
    as: "p",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut.",
  },
  render: (args) => (
    <section className="flex flex-col gap-8">
      <Typography {...args} variant="bodyLg">
        {args.children}
      </Typography>
      <Typography {...args} variant="bodyMd">
        {args.children}
      </Typography>
      <Typography {...args} variant="bodySm">
        {args.children}
      </Typography>
      <Typography {...args} variant="bodyXs">
        {args.children}
      </Typography>
    </section>
  ),
};

export const Monospace: Story = {
  args: {
    as: "code",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut.",
  },
  render: (args) => (
    <section className="flex flex-col gap-8">
      <Typography {...args} variant="bodyLg">
        {args.children}
      </Typography>
      <Typography {...args} variant="bodyMd">
        {args.children}
      </Typography>
      <Typography {...args} variant="bodySm">
        {args.children}
      </Typography>
      <Typography {...args} variant="bodyXs">
        {args.children}
      </Typography>
    </section>
  ),
};
