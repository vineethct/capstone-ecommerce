const pascalize = require("pascalize");

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "input",
        name: "componentName",
        message: "What is the component name?",
      },
      {
        type: "input",
        name: "figmaLink",
        message: "Paste Figma component link (Optional)",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const componentName = pascalize(answers.componentName);
      const path = `${componentName}`;
      const absPath = `components/${path}`;
      return { ...answers, path, absPath, componentName };
    });
  },
};
