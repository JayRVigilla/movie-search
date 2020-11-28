
const express = require('express');
const ExpressError = require('./helpers/ExpressError');

const router = new express.Router();

const API_BASE = 'https://movies-tvshows-data-imdb.p.rapidapi.com/'
const getApiData = require('./helpers/getApiData');
const { API_KEY } = require('./secrets');

/**
 * GET movie titles from query
 *
 * () => {
 *                      title,
 *    "movie_results": [{
 *                      year,
 *                      imdb_id
 *                      },
 *                      ...,
 *                      {}]
 * }
 * Response status code: 200
 * */
router.get('/search', async function (req, res, next) {
  try {
    const q = req.query.q
    const qString = `title=${q}`
    // console.log('qString', qString)
    const response = await getApiData(`${API_BASE}?${qString}&type=get-movies-by-title`)
    const results = response.data.movie_results
    // console.log('*****\n\n Value of results in routes', results, '\n\n *****')
    return res.json({ results });
   }catch(err){
    return next(err);
  }
})


 /**
  * GET movie details from IMDB ID
  *
  * (success) => {
  *               title,
  *               description,
  *               year,
  *               release_date,
  *               imdb_id,
  *               imdb_rating,
  *               vote_count,
  *               popularity,
  *               youtube_trailer_key,
  *               rated,
  *               runtime,
  *               genres: [],
  *               stars: [],
  *               directors:[],
  *               countries,
  *               language,
  *               status,
  *               status_message
  *               }
  */
router.get('/movies', async function (req, res, next) {
  try {
    const q = req.query.q
    const qString = `imdb=${q}`
    const response = await getApiData(`${API_BASE}?${qString}&type=get-movie-details`, {
      header: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
          "useQueryString": true
      }
    })
    const movie = response.data
    // console.log('*****\n\n Value of movie in routes', movie, '\n\n *****')
    return res.json({ movie });
    }catch(err){
    return next(err);
  }
})

module.exports = router;
