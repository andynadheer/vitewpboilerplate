import { StoryObj } from "@storybook/react";
import { Footer } from "./Footer";
import { withRenderApps } from "../../apps/apps";
import props from "./Footer.props.json";

export default {
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  args: {
    ...props,
  },
  decorators: [withRenderApps],
} as const;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
