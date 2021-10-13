# Chat-App

I created a small React chat-app where users sign in with a Google account and get authenticated through Firebase's SDK. From here, users can post messages, delete their own message, and see other user's posts.

I incorporated the following into this project:

- This react project was created with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html).
- I used [Tailwind CSS](https://tailwindcss.com/) for the first time to style and add responsiveness. _(I am a fan)_.
- [Firebase](https://firebase.google.com/docs) to store user state and messages.
- [Firebase's SDK](https://firebase.google.com/docs/auth/web/google-signin) to provide user authentication.
  - Can control the user login/logout flow with the GoogleAuthProvider
- The Auth hook from [react-firebase-hooks](https://www.npmjs.com/package/react-firebase-hooks) was leveraged as it acts as a listener to Firebase's Google 'Auth'.
  - This wraps around the Firebase Auth and allows for easy tracking of the current authentication state.

Channels I referenced for learning purposes:

- [freeCodeCamp.org](https://www.youtube.com/c/Freecodecamp)
- [TraversyMedia](https://www.youtube.com/c/TraversyMedia)
- [Fireship](https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA)

## Tailwind CSS Installation Documentation

Installation Guide for [Tailwind CSS](https://tailwindcss.com/docs/installation)

## Firebase Documentation

To learn more about Firebase, check out the [Firebase documentation](https://firebase.google.com/docs).

## Create-React-App Instructions

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
