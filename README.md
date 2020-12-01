# Movie Search

This project allows users to get movie data from Internet Movie DataBase (IMDB).

This project's frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
This Web App uses [Movies/TVShows Data (IMDB)](https://rapidapi.com/amrelrafie/api/movies-tvshows-data-imdb) and requires an application key with [RapidAPI](https://rapidapi.com/marketplace "RapidAPI Homepage"). Please get that **first**, or you won't be able to make any API calls.

After getting your RapisAPI token:
1. Fork the repo
2. Navigate in the terminal to your for forked repo.
3. Inside backend folder `npm install`
4. Create database `createdb movie_search`
5. Create tables `psql movie_search < data.sql`
6. Create secrets.js at the top of the backend folder. Your Rapid-API key will be held here.
   1. `cat > secrets.js` <kbd>ENTER</kbd>
   2. `const API_KEY = "ENTER_YOUR_API_KEY_HERE"` <kbd>ENTER</kbd>
   3. `module.exports = { API_KEY }` <kbd>control</kbd>+<kbd>d</kbd>
7. From frontend folder `npm install`
8. Open in your IDE and move .gitignore outside of the frontend folder and to the top.
9. Add secrets.js to your .gitignore file.

## Starting up
1. From the terminal, in the backend folder: `npm start`. The server will start up at [http://localhost:3001](http://localhost:3001).
2. From the frontend folder: `npm start`. Your default browser should open a tab at [http://localhost:3000](http://localhost:3000).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.