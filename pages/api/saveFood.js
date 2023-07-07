import sqlite3, { OPEN_READWRITE } from "sqlite3";
import path from "path";

export default function handler(req, res) {
  const dbPath = path.join(process.cwd(), "database/main.sqlite");

  const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Failed to connect to the database" });
    } else {
      const { name, text } = req.body;

      const query = `INSERT INTO food (name, text) VALUES (?, ?)`;

      db.run(query, [name, text], function (err) {
        if (err) {
          console.error(err.message);
          res.status(500).json({ error: "Failed to save presence data" });
        } else {
          res.status(200).json({ message: "Presence data saved successfully" });
        }
      });
      db.close();
    }
  });
}
