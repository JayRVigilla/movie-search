/**
 * getApiData()
 * makes axios call to URL passed in
 *
 * @param {string} url
 */

const axios = require('axios')

const header = {
	"x-rapidapi-key": "d0b9f50c04msh96a27d00b76a824p147cb4jsn935f6bf9deda",
	"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
	"useQueryString": true
}

async function getApiData(url) {
  try {
    const response = await axios.get(url, header)
    return response.data.posts
  }catch(e){
    console.error(e)
  }
}

module.exports = getApiData