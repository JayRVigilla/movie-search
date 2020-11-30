import {useState, useEffect} from 'react'
import './MovieDetails.css';
import Likes from './../Likes';
const {apiThumb} = require('./../../callAPI')

/**
 * Card to display quick movie details in a list
 *
 * @param {data} param0 Object
 *
 *
 */

function MovieDetails({ data }) {
  const [filmData, setFilmData] = useState(data)

  const thumbUp = async (id) => {
    const likesRes = await apiThumb(id, { thumbs_up: true })
    const likes = likesRes.movieLikes
    setFilmData({...filmData, movieLikes: likes})
  }

    const thumbDown = async (id) => {
      const likesRes = await apiThumb(id, { thumbs_down: true })
      const likes = likesRes.movieLikes
      setFilmData({...filmData, movieLikes: likes})
    }

    useEffect(() => {
      setFilmData(data)
    }, [data])

  return (
    <div className="MovieDetails">
      <h1>{filmData.title}, {filmData.year}</h1>
      <p>Description: {filmData.description}</p>
      <p>Directors: {filmData.directors.join(', ')}</p>
      <Likes id={filmData.imdb_id}
        tUp={filmData.movieLikes.thumbs_up}
        tDown={filmData.movieLikes.thumbs_down}
        thumbUp={thumbUp}
        thumbDown={thumbDown} />
    </div>
  );
}

export default MovieDetails;
