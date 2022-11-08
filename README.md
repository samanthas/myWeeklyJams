# Getting Started with myWeeklyJams

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and coffee.

You will need to create an app with Spotify using your personal Spotify account which you can do [here](https://developer.spotify.com/dashboard/login).

This project currently supports searching for a song, album or artist using Spotify's API. You can then add songs to a tracklist and create a playlist that will sync to your personal Spotify account.

## How to run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 'Running locally'

You will need to update the `redirectUri` variable in `Spotify.js` to `http://localhost:3000`

In Spotify, go to your app -> Edit Settings and add `http://localhost:3000` to your `Redirect URIs` and save

### `surge`

**Note: you need to cd into the build directory**

This project can be deployed to surge. Follow the steps on the screen.

You'll also need to update the redirectUri in the Spotify.js file and on the Spotify app account.

I recommend only running this project locally since deploying it to production doesn't really add anything special. You can send me a message and I can deploy to the project to a surge prod environment as well :)

### 'More to come...'
