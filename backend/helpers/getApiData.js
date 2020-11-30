/**
 * getApiData()
 * makes axios call to URL passed in
 *
 * @param {string} url
 */

const axios = require('axios')
const {API_KEY} = require('./../secrets')

async function getApiData(url) {
  try {
    const response = await axios.get(url, {
      headers : {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
        "useQueryString": true
      }
    })
    return response
  }catch(e){
    console.error(e)
  }
}

module.exports = getApiData