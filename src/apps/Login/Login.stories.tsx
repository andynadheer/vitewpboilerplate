import { StoryObj } from "@storybook/react";
import Login from "./Login";

export default {
  component: Login,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} as const;

type Story = StoryObj<typeof Login>;

export const Default: Story = {};
