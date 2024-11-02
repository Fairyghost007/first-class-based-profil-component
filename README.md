# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Demo 
<img width="398" alt="Screen Shot 2024-11-02 at 21 10 36" src="https://github.com/user-attachments/assets/2c9a28f9-dd72-416a-ac9b-3ee4a18d50b9">
<img width="398" alt="Screen Shot 2024-11-02 at 21 10 36" src="https://github.com/user-attachments/assets/4a9ed67d-8224-45b2-864e-39421ce27ff5">

# React Class-Based Profile Component

This project demonstrates creating a class-based React component with state management and lifecycle methods to display a user profile. The main goal is to introduce the concept of state and class-based components in React.

## Project Overview

This project creates a simple React app with a profile display that can be shown or hidden. Key functionalities include:

- **Class-Based Component**: `App.js` is transformed into a class-based component.
- **State Management**: The component has a `state` with a `Person` object containing `fullName`, `bio`, `imgSrc`, and `profession`. A `shows` boolean is also stored in the state to control profile visibility.
- **Toggle Profile**: A button toggles the display of the `Person` profile.
- **Timer Feature**: A timer displays the time (in seconds) since the component was last mounted, updating only when the profile is visible.

## Instructions

1. **Setup**:
   - Run `npx create-react-app profile-component` to create a new React project.
   
2. **Component Transformation**:
   - Convert `App.js` to a class-based component.
   
3. **State Implementation**:
   - Define `Person` in the state with the properties:
     - `fullName`
     - `bio`
     - `imgSrc`
     - `profession`
   - Add `shows` to manage visibility of the profile.
   
4. **Toggle Button**:
   - Add a button to toggle `shows`, displaying the profile only when `shows` is `true`.
   
5. **Timer**:
   - Use `setInterval` in the `componentDidMount` lifecycle method to update the time elapsed since the component mounted.

## Technologies

- **React**: Class-based component structure with state and lifecycle methods.
- **CSS**: Simple styling for profile visibility and layout.

## Usage

Clone the repository, install dependencies, and start the app:
```bash
git clone <repository-url>
cd profile-component
npm install
npm start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
