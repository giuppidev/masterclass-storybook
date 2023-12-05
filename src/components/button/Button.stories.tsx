import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { useState } from "react";

const meta = {
  title: "Components/MyButton",
  component: Button,
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof Button>;

const ButtonWithHooks = ({ text }: { text: "Login" | "Logout" }) => {
  const [label, setLabel] = useState(text);
  const handleClick = () => {
    setLabel((prev) => (prev === "Login" ? "Logout" : "Login"));
  };

  return <Button label={label} onClick={handleClick} />;
};

export const LoginButton: Story = {
  render: () => <ButtonWithHooks text="Login" />,
};
export const LogoutButton: Story = {
  render: () => <ButtonWithHooks text="Logout" />,
};
