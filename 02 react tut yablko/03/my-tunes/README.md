# Project

## Structure

Tunes
-TunesSearchForm
-TunesList
--TunesSong

### Tunes 

Holds state with songs and function setSongs.

Defines handleSearch, which is accepting string query parameter, creates AXIOS GET request and then filters the response for songs, extracts only data that will be used on the web and uses SetSongs to set the state for song list.

Consists of 2 components:
- TunesSearchForm - receives handleSearch callback function
- TunesList - receives songs (to display)

### TunesSearchForm

Accepts callback function (via onSearch prop) that accepts string parameter and does not return anything (void).

Creates reference for DOM element input.

Defines 2 event handlers:
- handleSubmit - fires after Enter is pressed to submit query string
- handleInput - fires after something is changed in the input, waits 0.5s

Defines searchMusic function which leverages the received callback function and is used in both event handlers to search songs.

### TunesList

Accepts list of Songs via songs prop.

Uses map function over songs to display each song as li element. 

Consists of 1 component that is repeated in a list and filled with the song info:
- TunesSong - receives song (to display)

### TunesSong

Accepts Song via song prop.

Defines songify function which takes care of proper formatting of song info.

In the template, it defines how the song will be displayed on the web.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
