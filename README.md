# npm-package-template-ts

This is a template repository for creating a npm React component package.

The initial setup followed the instructions on the library [here](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma).

Prettier and ESLint configurations were inspired from [this](https://betterprogramming.pub/how-to-create-and-publish-react-typescript-npm-package-with-demo-and-automated-build-80c40ec28aca) article.

The `LiveReactEditor` is built using the [react-live]<https://www.npmjs.com/package/react-live> package, with the documentation links below.

- [demo site](https://commerce.nearform.com/open-source/react-live/)
- [github repo](https://github.com/FormidableLabs/react-live)

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

## TDOD

- Add jest tests to the site
- Make a @types/package library to allow type safety for TypeScript projects
  - <https://dev.to/davidmaceachern/how-to-generate-type-definitions-for-distribution-on-npm-31mj>
  - <https://www.google.com/search?q=create+a+types+package&sca_esv=8b0f0bb61a9c22c4&rlz=1C1CHBF_en-GBGB954GB954&sxsrf=ACQVn094ZfQcx0_xYZFWjwgFVIdwZnY4yQ%3A1707500877216&ei=TWXGZZ3jDPa2hbIPraOXyAM&oq=create+a+%40types%2Fpacka&gs_lp=Egxnd3Mtd2l6LXNlcnAiFWNyZWF0ZSBhIEB0eXBlcy9wYWNrYSoCCAAyBhAAGBYYHjILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGA0jITVC_DVjlQXACeAGQAQKYAfUCoAGlGqoBCDEuMTUuNC4xuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICCxAAGIAEGIoFGJECwgIKEAAYgAQYigUYQ8ICEBAAGIAEGIoFGEMYsQMYgwHCAhAQLhiABBiKBRhDGMcBGNEDwgIIEAAYgAQYsQPCAgsQABiABBixAxiDAcICDhAuGIAEGLEDGMcBGNEDwgIFEAAYgATCAg4QABiABBiKBRixAxiDAcICFBAuGIAEGIoFGLEDGIMBGMcBGNEDwgIREC4YgAQYsQMYgwEYxwEY0QPCAhEQABiABBiKBRiRAhixAxiDAcICDBAuGBYYHhjHARjRA-IDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp>
- Test on JavaScript React projects as well as TypeScript ones
