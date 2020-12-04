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
      <button onClick={() => {thumbUp(id)}}>{tUp} <i class="far fa-thumbs-up"></i>Yeah!</button>
      <button onClick={() => {thumbDown(id) }}>{tDown} <i class="far fa-thumbs-down"></i>Meh</button>
    </div>

  );
}

export default Likes;
