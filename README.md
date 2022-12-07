# [Replace with client/project name]

## Getting started

1. Clone this repo:

```sh
git clone git@github.com:codeandtheory/[client-project_name].git # update with the repo URL
cd [client-project_name] # update
```

2. Install dependencies (please note we're using Yarn and not npm):

```sh
yarn
```

3. Run development server

```sh
yarn dev
```

## Storybook

This project uses Storybook deployed on Vercel at the following permanent URLs:

<!-- Optionally add other branches/environments -->

`main` branch -> [[client-project_name].vercel.app](https://[client-project_name].vercel.app) <br/>

as well as on ephemeral URLs for each Pull Request.

To run the SB locally:

```sh
yarn storybook
```

### New component generator

As a convenience there is a new component generator script which will scaffold a basic boilerplate for the new component including the Storybook template with an option to link to the component design in Figma. In order to invoke it run the following command in your terminal:

```sh
yarn new:component
```

And follow prompts to give component name (note that we're using PascalCase naming convention for components) and Figma link.

#### Extending component generator

If new useful patterns are observed either to improve the existing component generator or to add an entirely new kind of generator, you can look into `.hygen` folder and follow [Hygen](https://www.hygen.io/docs/quick-start) documentation.
