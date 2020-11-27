/**
 * getApiData()
 * makes axios call to URL passed in
 *
 * @param {string} url
 */

const axios = require('axios')

async function getApiData(url) {
  try {
    const response = await axios.get(url)
    return response.data.posts
  }catch(e){
    console.error(e)
  }
}

module.exports = getApiData