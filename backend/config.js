/** Shared config for application; can be req'd many places. */

require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY || "test";

const PORT = +process.env.PORT || 3000;

const   DB_URI = process.env.DATABASE_URL || "movie_search";

module.exports = {
  SECRET_KEY,
  PORT,
  DB_URI
};
