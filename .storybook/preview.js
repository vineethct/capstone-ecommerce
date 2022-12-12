import { addDecorator } from "@storybook/react";
import { withTaffy } from "@degjs/storybook-addon-taffy";
import "../styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(withTaffy);
