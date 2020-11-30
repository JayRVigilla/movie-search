/** Related functions for likes table. */

const db = require("./../db");
const ExpressError = require("../helpers/ExpressError");
const getApiData = require('./../helpers/getApiData')
const API_KEY = require("./../secrets")
const API_BASE = 'https://movies-tvshows-data-imdb.p.rapidapi.com/'

class Like {
  /** Given a movie id, return likes date for movie. */
  static async getMovieLikes(id) {
    const sqlQuery = `SELECT id, thumbs_up, thumbs_down
                      FROM likes
                      WHERE id = $1`

    const likesRes = await db.query(sqlQuery,[id]);
    const likes = likesRes.rows[0];

    if (!likes) {
      // get movie data
      const response = await getApiData(`${API_BASE}?imdb=${id}&type=get-movie-details`,{
      header: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
          "useQueryString": true
        }
      })
      const movie = response.data
      const newLikes = await Like.create(id, movie.imdb_rating, movie.vote_count)
      return newLikes
    }

    return likes;
  }

  /** Create a movie likes row (from data), update db, return new job data. */
  static async create(id, imdb_rating, vote_count) {
    const tUp = ~~(parseInt(imdb_rating) / 10 * parseInt(vote_count));
    const tDown = parseInt(vote_count) - tUp;
    const sqlQuery = `INSERT INTO likes (id, thumbs_up, thumbs_down)
                      VALUES ($1, $2, $3)
                      RETURNING id, thumbs_up, thumbs_down`
    const result = await db.query(sqlQuery,[id, tUp, tDown]);

    return result.rows[0];
  }

  /** Update like table @ thumbs_up
   *
   * Return data for changed like.
   *
   */

  static async thumbUp(id) {
    const sqlQuery = `UPDATE likes
                      SET thumbs_up = thumbs_up + 1
                      WHERE id = $1
                      RETURNING id, thumbs_down, thumbs_up`

    const result = await db.query(sqlQuery,[id]);
    const like = result.rows[0];

    if (!like) {
      console.log(`No movie likes in table @ id=${id}`)
    }

    return like;
  }

 /** Update like table @ thumbs_down
   *
   * Return data for changed like.
   *
   */

  static async thumbDown(id) {
    const sqlQuery =`UPDATE likes
                    SET thumbs_down = thumbs_down + 1
                    WHERE id = $1
                    RETURNING id, thumbs_up, thumbs_down`

    const result = await db.query(sqlQuery,[id]);
    const like = result.rows[0];

    if (!like) {
      console.log(`No movie likes in table at id=${id}`)
    }

    return like;
  }

  /** Delete given job from database; returns undefined. */
  static async remove(id) {
    const sqlQuery = `DELETE FROM likes
                      WHERE id = $1
                      RETURNING id`

    const result = await db.query(sqlQuery,[id]);

    if (result.rows.length === 0) {
      throw new ExpressError(`There exists no Likes @ id='${id}`, 404);
    }
  }

}

module.exports = Like;