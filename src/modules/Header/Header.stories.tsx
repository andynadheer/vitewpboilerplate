import { StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { withRenderApps } from "../../apps/apps";
import props from "./Header.props.json";

export default {
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  args: {
    ...props,
  },
  decorators: [withRenderApps],
} as const;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
