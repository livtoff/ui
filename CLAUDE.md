This is a Storybook project which manages the Livtoff UI library. The library consists out of VueJS components which are used to rapidly build user interfaces.

## Technologies used

### Storybook
Storybook v8 is being used.

### Vue 3
All components and composables are written in Vue 3 with composition api

### Typescript
The components and composables use typescript.

### TailwindCSS 4
TailwindCSS v4 is being used.

### Runtime
The bun runtime is being used instead of node


## Structure:
- `.src/components` contains all UI components
- `index.ts` contains all

## Creating components
When a component needs to be created a couple steps need to be taken:
1. Create a component folder in `./src/components`. The folder name should be PascalCase. Keep an eye on the folder structure, some components should be created in a specific category.
2. Create the vue file with the component name in PascalCase. 
3. Setup the component like:
```vue
<script setup lang="ts">
...
</script>

<template>
</template>
```
4. Create a storybook story file with the following naming convention `CompnentName.stories.ts`
5. View other components to view that basic structure
6. Add the component to `./index.ts` and make sure it is being exported. Be thoughtful on where to put the export as related components should be close to each other.

## Publishing a new releas
The library can be published to GitHub. The following steps need to be taken.
1. Make sure there are no staged files, else ask to commit files first
2. Make sure we are on the master branch, else ask to switch branch
3. Bump the version in package.json, just increase the last number by 1, i.e. `0.0.16` -> `0.0.17`
4. Commit the package.json file with a message like "preparing new release"
5. Create a tag and a release, normally the github cli is being used `gh release create 0.0.16` make sure to do something similar, and add release notes if applicable
6. After the release has been created a github action to actually publish the library will be initiated. You can check the github actions to see wether it succeeded or not.
