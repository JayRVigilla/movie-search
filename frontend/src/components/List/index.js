import './List.css';
import Card from'./../Card';

/**
 * Unordered list that will render list item components
 *
 * @param {listData} param0 Array
 *
 *
 */

function List({ listData, getMovieDetails }) {
  const renderList = () => listData.map((item) => < Card key={ item.imdb_id} data={item} getMovieDetails={getMovieDetails}/>)
  const style = {
    'listStyleType': 'none'
  }

  return (
    <ul className="List" style={style}>
      {renderList()}
    </ul>
  );
}

export default List;
