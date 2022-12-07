---
to: <%= absPath %>/<%= componentName %>.stories.js
---
import React from "react";

import { <%= componentName %> } from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/<%= componentName %>",
  component: <%= componentName %>,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <<%= componentName %> {...args} />;

export const Default = Template.bind({});
<% if(figmaLink){ %>
Default.parameters = {
  design: {
    type: "figma",
    url: "<%= figmaLink %>",
  },
};
<% } %>
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: "<%= componentName %>",
  textColor: "#fff",
};
