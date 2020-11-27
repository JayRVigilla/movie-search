/**
 * getApiData()
 * makes axios call to URL passed in
 *
 * @param {string} url
 */

const axios = require('axios')
const {API_KEY} = require('../secrets')

async function getApiData(url) {
  try {
    const response = await axios.get(url, {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      "useQueryString": true
    })
    console.log(`*****\n\n Running getAPIData to ${url}  \n\n *****`)
    console.log('*****\n\n Value of response in getApiData', response, '\n\n *****')
    return response.data.posts
  }catch(e){
    console.error(e)
  }
}

module.exports = getApiData