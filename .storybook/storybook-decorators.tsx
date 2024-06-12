// .storybook/storybook-decorators.tsx
import React from "react";
import { MantineProvider } from "@mantine/core";
import { Decorator } from "@storybook/react";

export const withMantine: Decorator = (Story) => (
  <MantineProvider>
    <Story />
  </MantineProvider>
);
