const axios = require('axios')
const BACKEND_URL = 'http://localhost:5000/api'

// movie search by title
async function apiSearchByTitle() {
  const res = axios.get(`${BACKEND_URL}/search?q=${}`)
}

// movie detail by IMDB ID
async function apiSearchByImdbId() {
  const res = axios.get(`${BACKEND_URL}/movies?q=${}`)
}

module.exports = { apiSearchByImdbId, apiSearchByTitle}