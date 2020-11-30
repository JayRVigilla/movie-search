/**
 * Likes widget to display likes
 *
 * @param {data} param0 Object
 *
 *
 */

function Likes({ id, tUp, tDown, thumbUp, thumbDown}) {
  return (
    <div className="likes">
      <button onClick={() => {thumbUp(id)}}>{tUp} Thumbs up</button>
      <button onClick={() => {thumbDown(id) }}>{tDown} Thumbs down</button>
    </div>

  );
}

export default Likes;
