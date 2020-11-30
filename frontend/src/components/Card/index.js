// import Card item component, a card for instance
import './Card.css';

/**
 * Card to display quick movie details in a list
 *
 * @param {data} param0 Object
 *
 *
 */

function Card({ data, getMovieDetails}) {
  const {title, year, imdb_id } = data

  return (
    <li className="movie-card">
      <button onClick={() => getMovieDetails(imdb_id)}><h2>{title}</h2></button>
      <p>{year}</p>
    </li>

  );
}

export default Card;
