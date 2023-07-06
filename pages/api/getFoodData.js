import sqlite3, { OPEN_READWRITE } from "sqlite3";
import path from "path";

export default function handler(req, res) {
  const dbPath = path.join(process.cwd(), "database/main.sqlite");

  const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Failed to connect to the database" });
      return db.close();
    } else {
      const query = "SELECT * FROM food";
      db.all(query, (err, rows) => {
        if (err) {
          console.error(err.message);
          res
            .status(500)
            .json({ error: "Failed to retrieve records from the database" });
        } else {
          res.status(200).json(rows);
        }
        db.close();
      });
    }
  });
}
