# Front end developer test
This test is developed by Daniel Ortega for WAES, it was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Improvements
- Built a color.js utils library for handling colors, including random color generation and invert color generation, this leaves open the chance to make the number of colors available to be configured by the user.
- Some styling considerations built on top of the base sketch received in the test definition for the UI.
- I didn't implement any state handling library because React already offers the Context API Which I used as state storage.

## Caveats
- Given that all modern browsers, all but firefox, don't support multiple selection, I couldn't store the selections as ranges of the document's Selection object as I intended, so I had to use the `surroundContents` method of the Range object provided by Selection, this method throws an error when the range given includes non text nodes, such as tag endings, so I decided to format text as plain on pate event to avoid that error. I know a fallback for when the error throws is a better approach but I didn't have the time to implement it.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
