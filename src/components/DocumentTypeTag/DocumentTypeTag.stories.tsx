import { StoryObj } from "@storybook/react";
import { DocumentTypeTag } from "./DocumentTypeTag";
import props from "./DocumentTypeTag.props.json";

export default {
  component: DocumentTypeTag,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    ...props,
  },
} as const;

type Story = StoryObj<typeof DocumentTypeTag>;

export const Default: Story = {};
