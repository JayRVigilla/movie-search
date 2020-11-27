// import Card item component, a card for instance
import './Card.css';

/**
 *
 * @param {data} param0 Object
 *
 * Card to display quick movie details in a list
 *
 */

function Card({ data }) {
  const {title, year } = data

  // const topBilling = (starList) =>
  //   starList.length > 3
  //   ? starList.slice(0, 3).join(', ') + "..."
  //   : starList.join(' & ')

  return (
    <li className="movie-card">
      <h2>{title}</h2>
      <p>{year}</p>
      {/* <p>Starring: {topBilling(stars)}</p> */}
    </li>

  );
}

export default Card;
