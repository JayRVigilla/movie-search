const db = require("../db");
const ExpressError = require("../helpers/ExpressError");
const sqlForPartialUpdate = require("../helpers/partialUpdate");

/** Related functions for Likes table. */

class Likes {
  /** Find all jobs (can filter on terms in data). */

  static async getMovieLikes(id) {
    let baseQuery = "SELECT id, thumbs_up, thumbs_down FROM likes";
    let whereExpressions = [];
    let queryValues = [];

    // For each possible search term, add to whereExpressions and
    // queryValues so we can generate the right SQL

    if (data.min_salary) {
      queryValues.push(+data.min_employees);
      whereExpressions.push(`min_salary >= $${queryValues.length}`);
    }

    if (data.max_equity) {
      queryValues.push(+data.max_employees);
      whereExpressions.push(`min_equity >= $${queryValues.length}`);
    }

    if (data.search) {
      queryValues.push(`%${data.search}%`);
      whereExpressions.push(`title LIKE $${queryValues.length}`);
    }

    if (whereExpressions.length > 0) {
      baseQuery += " WHERE ";
    }

    // Finalize query and return results

    let finalQuery = baseQuery + whereExpressions.join(" AND ");
    const jobsRes = await db.query(finalQuery, queryValues);
    return jobsRes.rows;
  }

  /** Given a job id, return data about job. */

  static async findOne(id) {
    const likesRes = await db.query(
      `SELECT id, thumbs_up, thumbs_down
        FROM likes
        WHERE id = $1`,
      [id]
    );

    const likes = likesRes.rows[0];

    if (!likes) {
      throw new ExpressError(`There exists no job '${id}'`, 404);
    }

    return likes;
  }

  /** Create a movie likes row (from data), update db, return new job data. */

  static async create(id, data) {
    const result = await db.query(
      `INSERT INTO likes (id, thumbs_up, thumbs_down)
        VALUES ($1, $2, $3, $4)
        RETURNING id, thumbs_up, thumbs_down`,
      [data.id, data.thumbs_up, data.thumbs_down]
    );

    return result.rows[0];
  }

  /** Update like data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain
   * all the fields; this only changes provided ones.
   *
   * Return data for changed job.
   *
   */

  static async update(id, data) {
    let { query, values } = sqlForPartialUpdate("likes", data, "id", id);

    const result = await db.query(query, values);
    const like = result.rows[0];

    if (!like) {
      // throw new ExpressError(`There exists no movie at that id ${id}`, 404);
      // should create with data
    }

    return job;
  }

  /** Delete given job from database; returns undefined. */

  static async remove(id) {
    const result = await db.query(
      `DELETE FROM jobs
        WHERE id = $1
        RETURNING id`,
      [id]
    );

    if (result.rows.length === 0) {
      throw new ExpressError(`There exists no job '${id}`, 404);
    }
  }

}

module.exports = Job;
