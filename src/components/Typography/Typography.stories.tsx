import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";
import { Variant } from "./Typography.types";

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
      <Typography as="h1" variant={Variant.Heading2Xl}>
        {args.children}
      </Typography>
      <Typography as="h2" variant={Variant.HeadingXl}>
        {args.children}
      </Typography>
      <Typography as="h3" variant={Variant.HeadingLg}>
        {args.children}
      </Typography>
      <Typography as="h4" variant={Variant.HeadingMd}>
        {args.children}
      </Typography>
      <Typography as="h5" variant={Variant.HeadingSm}>
        {args.children}
      </Typography>
      <Typography as="h6" variant={Variant.HeadingXs}>
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
      <Typography {...args} variant={Variant.BodyLg}>
        {args.children}
      </Typography>
      <Typography {...args} variant={Variant.BodyMd}>
        {args.children}
      </Typography>
      <Typography {...args} variant={Variant.BodySm}>
        {args.children}
      </Typography>
      <Typography {...args} variant={Variant.BodyXs}>
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
      <Typography {...args} variant={Variant.BodyLg}>
        {args.children}
      </Typography>
      <Typography {...args} variant={Variant.BodyMd}>
        {args.children}
      </Typography>
      <Typography {...args} variant={Variant.BodySm}>
        {args.children}
      </Typography>
      <Typography {...args} variant={Variant.BodyXs}>
        {args.children}
      </Typography>
    </section>
  ),
};
