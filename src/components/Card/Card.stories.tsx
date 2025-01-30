import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import { Button } from "../Button";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper erat eget justo porta, id euismod nisl vulputate. Donec lobortis ligula vel erat tempus euismod. Nam id neque turpis. Duis non libero cursus, viverra sem a, convallis tortor. Nullam lectus arcu, eleifend id fringilla ut, cursus sed enim. Sed ac arcu porttitor, pharetra ex sit amet, tincidunt sapien. Integer a tempor nisi, consectetur convallis turpis. Donec ut mollis lectus, ac malesuada arcu. Aenean vitae quam quis dui mollis pellentesque.";

export const Default: Story = {
  args: {
    children: content,
  },
};

export const WithTitle: Story = {
  args: {
    header: "Card Title",
    children: content,
  },
};

export const WithActions: Story = {
  args: {
    header: "Card Title",
    children: content,
    footer: (
      <>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Accept</Button>
      </>
    ),
  },
};
