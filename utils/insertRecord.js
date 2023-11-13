import db from "../db/db.js";

export const insertRecord = async (data) => {
  const { id, title, link, published, updated, summary, author } = data;
  const sql = `INSERT INTO events(id, title, link, published, updated, summary, author) VALUES (?,?,?,?,?,?,?)`;

  return new Promise((resolve, reject) => {
    db.run(
      sql,
      [id, title, link, published, updated, summary, author.name[0]],
      (err) => {
        if (err) {
          console.error(`Atom File Entry Failed:${id}. Error: ${err}`);
          reject(err);
        } else {
          resolve(); 
        }
      }
    );
  });
};
