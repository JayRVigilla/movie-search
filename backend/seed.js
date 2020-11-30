const db = require("./db");

// Database DDL (for tests)

const DDL =
`CREATE TABLE likes(
  id TEXT PRIMARY KEY,
  thumbs_up INTEGER DEFAULT(0),
  thumbs_down INTEGER DEFAULT(0)
);`

async function seedData() {
  try {
    await db.query(DDL);
    const likes = await db.query(
      `INSERT INTO likes (id, thumbs_up, thumbs_down) VALUES
      ('goodId', 100, 0)`
    )
  } catch (error) {
    console.log("Something went wrong!");
    console.log(err);
    process.exit(1);
  }
}

seedData().then(() => {
  console.log("Successful seed!");
  process.exit();
});

async function afterAllHook() {
  try {
    await db.end();
  } catch (err) {
    console.error(err);
  }
}