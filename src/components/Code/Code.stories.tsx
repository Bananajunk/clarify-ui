import type { Meta, StoryObj } from "@storybook/react";
import Code from "./Code";
import { Typography } from "../Typography";

const meta: Meta<typeof Code> = {
  component: Code,
};

export default meta;

type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: { children: "const greeting = 'Hello World!';" },
  render: (args) => (
    <div className="flex flex-col gap-8">
      <Typography as="p" variant="bodyLg">
        Here is an example of some inline code
        <Code {...args} />
        and some text.
      </Typography>
      <Typography as="p" variant="bodyMd">
        Here is an example of some inline code
        <Code {...args} />
        and some text.
      </Typography>
      <Typography as="p" variant="bodySm">
        Here is an example of some inline code
        <Code {...args} />
        and some text.
      </Typography>
    </div>
  ),
};

export const MultiLine: Story = {
  args: {
    children:
      "const greeting = 'Hello World!';\nconst goodbye = 'Goodbye World!';\n\nif ( morning ) {\n\tconsole.log(greeting);\n} else {\n\tconsole.log(goodbye);\n}",
  },
};
