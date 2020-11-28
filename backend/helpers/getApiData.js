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
    // console.log('*****\n\n Running getApiData from self \n\n *****')
    const response = await axios.get(url, {
      headers : {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
        "useQueryString": true
      }
    })
    // console.log(`*****\n\n Running getAPIData to ${url}  \n\n *****`)
    // console.log('*****\n\n Value of response in getApiData', response, '\n\n *****')
    return response
  }catch(e){
    console.error(e)
  }
}

module.exports = getApiData