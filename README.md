# Movie Search

This project allows users to get movie data from Internet Movie DataBase (IMDB).

![demo-gif](https://github.com/JayRVigilla/movie-search/raw/main/movie-search-demo.gif "Logo Title Text 1")


This Web App uses [Movies/TVShows Data (IMDB)](https://rapidapi.com/amrelrafie/api/movies-tvshows-data-imdb) and requires an application key with [RapidAPI](https://rapidapi.com/marketplace "RapidAPI Homepage"). Please get that **first**, or you won't be able to make any API calls.

This project's frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

After getting your RapidAPI token:
1. Fork the repo.
2. Navigate in the terminal to your forked repo.
3. Inside backend folder `npm install`
4. Create database `createdb movie_search`
5. Create tables `psql movie_search < data.sql`
6. Create secrets.js at the top of the backend folder. Your Rapid-API key will be held here.
   1. `cat > secrets.js` <kbd>ENTER</kbd>
   2. `const API_KEY = "YOUR_API_KEY_HERE"` <kbd>ENTER</kbd>
   3. `module.exports = { API_KEY }` <kbd>control</kbd>+<kbd>d</kbd>
7. From frontend folder `npm install`
8. Open in your IDE and move .gitignore outside of the frontend folder and to the top.
9. Add secrets.js to your .gitignore file.

## Starting up
1. From the terminal, in the backend folder: `npm start`. The server will start up at [http://localhost:3000](http://localhost:3000).
2. From the frontend folder: `npm start`. Your default browser should open a tab at [http://localhost:3000](http://localhost:3000). You'll be asked if you'd like to open at another port. Go ahead and say 'Yes'.
3. Search for movie data!