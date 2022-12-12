module.exports = {
  stories: ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "addon-screen-reader",
    "storybook-addon-designs",
    "@degjs/storybook-addon-taffy/register",
    "storybook-addon-next",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
