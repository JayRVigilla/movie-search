/** POST /cats - create cat from data; return `{cat: cat}` */

describe("POST /cats", function() {
  test("Creates a new cat", async function() {
    const response = await request(app)
      .post(`/cats`)
      .send({
        name: "Ezra"
      });
    expect(response.statusCode).toEqual(201);
    expect(response.body).toEqual({
      cat: {id: expect.any(Number), name: "Ezra"}
    });
  });
});

/** GET /cats/[id] - return data about one cat: `{cat: cat}` */

describe("GET /cats/:id", function() {
  test("Gets a single cat", async function() {
    const response = await request(app).get(`/cats/${testCat.id}`);
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({cat: testCat});
  });

  test("Responds with 404 if can't find cat", async function() {
    const response = await request(app).get(`/cats/0`);
    expect(response.statusCode).toEqual(404);
  });
});

/** PATCH /cats/[id] - update cat; return `{cat: cat}` */

describe("PATCH /cats/:id", function() {
  test("Updates a single cat", async function() {
    const response = await request(app)
      .patch(`/cats/${testCat.id}`)
      .send({
        name: "Troll"
      });
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({
      cat: {id: testCat.id, name: "Troll"}
    });
  });

  test("Responds with 404 if can't find cat", async function() {
    const response = await request(app).patch(`/cats/0`);
    expect(response.statusCode).toEqual(404);
  });
});

/** DELETE /cats/[id] - delete cat,
 *  return `{message: "Cat deleted"}` */

describe("DELETE /cats/:id", function() {
  test("Deletes a single a cat", async function() {
    const response = await request(app)
      .delete(`/cats/${testCat.id}`);
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({ message: "Cat deleted" });
  });
});