const request = require('supertest');
const app = require('./app');
const db = require('./db')

const goodMoviesSearch = 'gremlins'
const noneFoundMoviesSearch = 'asdfha;woIVNWEV8wv;l23'
const goodTitleSearch = 'tt0087363' // Gremlins, 1984 IMDB ID
const badTitleSearch = '3637800tt' // Gremlins, 1984 IMDB ID reversed


describe("GET /search/", function() {
  test("Gets a list of movies", async function() {
    const response = await request(app).get(`/api/search?title=${goodMoviesSearch}`);
    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body.movie_results)).toEqual(true);
    expect(response.body.movie_results.length()).toEqual(4);
  });

  test("Responds with empty {} if no movies found", async function() {
    const response = await request(app).get(`/api/search?title=${noneFoundMoviesSearch}`);
    expect(response.statusCode).toEqual(200);
    expect(response.body.movie_results).toEqual(undefined);
    expect(response.body).toEqual({/** empty object */});
  });
});

describe("GET /movies/", function() {
  test("Gets movie details for a single movie", async function() {
    const response = await request(app).get(`/api/movies?q=${goodTitleSearch}`);
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toEqual("object");
    expect(response.body.title).toEqual("Gremlins");
    expect(response.body.genres.length()).toEqual(5);
    expect(response.body.stars).toContain("Corey Feldman");
  });

  test("Responds with empty {} if no movies found", async function() {
    const response = await request(app).get(`/api/movies?q=${badTitleSearch}`);
    expect(response.statusCode).toEqual(500);
    expect(response.body.movie_results).toEqual(undefined);
    expect(response.body.message).toMatch(/invalid input syntax for type integer:/);
  });
});

afterAll(async function () {
    try {
      await db.end();
    } catch (err) {
      console.error(err);
    }
})



// /** PATCH /cats/[id] - update cat; return `{cat: cat}` */

// describe("PATCH /movies/:id", function() {
//   test("Updates a single like", async function() {
//     const response = await request(app)
//       .patch(`/movies/${testCat.id}`)
//       .send({
//         name: "Troll"
//       });
//     expect(response.statusCode).toEqual(200);
//     expect(response.body).toEqual({
//       cat: {id: testCat.id, name: "Troll"}
//     });
//   });

//   test("Responds with 404 if can't find cat", async function() {
//     const response = await request(app).patch(`/cats/0`);
//     expect(response.statusCode).toEqual(404);
//   });
// });

// /** DELETE /cats/[id] - delete cat,
//  *  return `{message: "Cat deleted"}` */

// describe("DELETE /cats/:id", function() {
//   test("Deletes a single a cat", async function() {
//     const response = await request(app)
//       .delete(`/cats/${testCat.id}`);
//     expect(response.statusCode).toEqual(200);
//     expect(response.body).toEqual({ message: "Cat deleted" });
//   });
// });