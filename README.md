# rc-checkbox-tree
React-Tree is a react component to display data with or without checkboxes.

![React-Tree example](examples/react-tree.png)
# Table of Contents
1. [Getting Started](#getting-started)
2. [API](#api)
3. [Available Scripts](#available-scripts)

## Getting Started
To use the tree just run ```npm install rc-checkbox-tree```.
Or with yarn ```yarn add rc-checkbox-tree```
## API

**Node format:**
```
{
    "name": "notebook",
    "parent": "computer"
}
```

### ``checkboxes:`` **Boolean - true (default)**
Display the checkboxes or not
### ``data:`` **Array of nodes**
An array of object nodes which should display as tree
### ``onSelect:`` **Function**
Callback that is invoked after a checkbox was selected
### ``selectChildren:`` **Boolean - true (default)**
Select all children or not if the parent is selected
### ``selectParents:`` **Boolean - true (default)**
select all parents or not if a child was selected
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
**x-special/nautilus-clipboard
copy
file:///home/kevin/pCloudDrive/Studium/Master/3.%20semester/modheu/MW178%20Themen-und%20Praeferenzbogen%20-%20WS21_22.pdf
**