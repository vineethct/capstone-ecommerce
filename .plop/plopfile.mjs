export default function (plop) {
  plop.setGenerator("component", {
    description: "Creates a new component inside of 'src/components'",
    prompts: [
      {
        type: "input",
        name: "name",
        message:
          "What is the name of the component? This will be placed in 'src/components/{foo-bar}'",
      },
      {
        type: "input",
        name: "figmaLink",
        message: "Paste Figma component link (Optional)",
      },
    ],
    actions: [
      // component
      {
        type: "add",
        path: "../src/components/{{kebabCase name}}/{{kebabCase name}}.component.tsx",
        templateFile: "templates/component/component.tsx.hbs",
      },
      // stories
      {
        type: "add",
        path: "../src/components/{{kebabCase name}}/{{kebabCase name}}.stories.tsx",
        templateFile: "templates/component/stories.tsx.hbs",
      },
    ],
  });
}
