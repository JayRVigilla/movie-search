// import list item component, a card for instance
import './List.css';
import Card from'./../Card';

/**
 *
 * @param {listData} param0 Array
 *
 * Unordered list that will render list item components
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
