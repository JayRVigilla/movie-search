import {useState} from 'react'
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
  const { title,
    directors,
    year,
    description,
    movieLikes,
    imdb_id} = filmData

    const thumbUp = async (id) => {
      const likesRes = await apiThumb(id, { thumbs_up: true })
      setFilmData.movieLikes(likesRes.data)
    }

    const thumbDown = async (id) => {
      const likesRes = await apiThumb(id, { thumbs_down: true })
      setFilmData({...filmData, movieLikes: likesRes.data})
    }

  return (
    <div className="MovieDetails">
      <h1>{title}, {year}</h1>
      <p>Description: {description}</p>
      <p>Directors: {directors.join(', ')}</p>
      <Likes id={imdb_id}
        tUp={movieLikes.thumbs_up}
        tDown={movieLikes.thumbs_down}
        thumbUp={thumbUp}
        thumbDown={thumbDown} />
    </div>
  );
}

export default MovieDetails;
