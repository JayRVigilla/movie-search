const axios = require('axios')
const BACKEND_URL = 'http://localhost:3000/api'

// movie search by title
async function apiSearchByTitle(query) {
  const res = await axios.get(`${BACKEND_URL}/search?q=${query}`)
  return res.data
}

// movie detail by IMDB ID
async function apiSearchByImdbId(id) {
  const res = await axios.get(`${BACKEND_URL}/movies?q=${id}`)
  return res.data
}

// movie detail by IMDB ID
async function apiThumb(id, body) {
  const res = await axios.patch(`${BACKEND_URL}/movies/${id}`, {'data': body})
  return res.data
}

module.exports = { apiSearchByImdbId, apiSearchByTitle, apiThumb}