
const express = require('express');
const ExpressError = require('./helpers/expressError');

const router = new express.Router();

const API_BASE = 'https://movies-tvshows-data-imdb.p.rapidapi.com/'
const getApiData = require('./helpers/getApiData');

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
    console.log('qString', qString)
    const response = await getApiData(`${API_BASE}?${qString}&type=get-movies-by-title`).data
    return res.json({ response });
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
router.get('/movie', async function (req, res, next) {
  try {
    const q = req.body.q
    const qString = `imdb=${q}`
    const response = await getApiData(`${API_BASE}?${qString}&type=get-movie-details`).data
    return res.json({ response });
    }catch(err){
    return next(err);
  }
})

module.exports = router;
