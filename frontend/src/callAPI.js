const axios = require('axios')
const BACKEND_URL = 'http://localhost:5000/api'

// movie search by title
async function apiSearchByTitle(query) {
  const res = axios.get(`${BACKEND_URL}/search?q=${query}`)
  return res
}

// movie detail by IMDB ID
async function apiSearchByImdbId(id) {
  const res = axios.get(`${BACKEND_URL}/movies?q=${id}`)
  return res
}

module.exports = { apiSearchByImdbId, apiSearchByTitle}