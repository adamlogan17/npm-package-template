# npm-package-template

This is a template repository for creating a npm React component package.

The initial setup followed the instructions on the library [here](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma).

Prettier and ESLint configurations were inspired from [this](https://betterprogramming.pub/how-to-create-and-publish-react-typescript-npm-package-with-demo-and-automated-build-80c40ec28aca) article.

## Using the Template

Within `./package.json` ensure the following is changed to the equivalent for your project.

```json
{
    "name": "<name-of-library>",
    "author": {
        "name": "<your-name>"
    },
    "homepage": "<your-demo-page-if-applicable>",
    "repository": {
        "type": "git",
        "url": "<your-repo-url>"
    },
    "keywords": [
        "react",
        "typescript",
        "<relevant-keyword>"
    ],
    "license": "<your-license>"
}
```

Delete the existing components, within `./lib/components` and add the components to be part of the package here.

All types that are required to be exported within the package, should be contained within `./lib/types.d.ts`

Create the demo site within the `./src` folder.
