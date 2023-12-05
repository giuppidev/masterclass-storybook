import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "My Button",
  },
};

export const Error: Story = {
  args: {
    primary: false,
    backgroundColor: "red",
    label: "My Error",
  },
};

export const BigButton: Story = {
  args: {
    size: "large",
    label: "My Big Button",
  },
};
