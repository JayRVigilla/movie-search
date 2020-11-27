import './List.css';
import Card from'./../Card';

/**
 * Unordered list that will render list item components
 *
 * @param {listData} param0 Array
 *
 *
 */

function List({ listData }) {
  const renderList = (items) => {
    items.map((item) => < Card key={item.imdb_id} data={item} />
    )
  }

  return (
    <ul className="List">
      {renderList(listData)}
    </ul>
  );
}

export default List;
