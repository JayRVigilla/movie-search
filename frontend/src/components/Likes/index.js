/**
 * Likes widget to display likes
 *
 * @param {data} param0 Object
 *
 *
 */
// const {apiThumb} = require('./../../callAPI')


function Likes({ id, tUp, tDown, thumbUp, thumbDown}) {
  // const thumbUp = async (id) => {
  //   await apiThumb(id, {thumbs_up: true})
  // }

  // const thumbDown = async (id) => {
  //   await apiThumb(id, { thumbs_down: true })
  // }

  return (
    <div className="likes">
      <button onClick={() => {thumbUp(id)}}>{tUp} Thumbs up</button>
      <button onClick={() => {thumbDown(id) }}>{tDown} Thumbs down</button>
    </div>

  );
}

export default Likes;
