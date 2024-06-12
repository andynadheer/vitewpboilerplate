import type { Preview } from "@storybook/react";
import "../src/index.scss";
import { withMantine } from "./storybook-decorators";

export const decorators = [withMantine];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
