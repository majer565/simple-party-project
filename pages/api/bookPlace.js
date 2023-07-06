import sqlite3, { OPEN_READWRITE } from "sqlite3";
import path from "path";

export default function handler(req, res) {
  const dbPath = path.join(process.cwd(), "database/main.sqlite");

  const db = new sqlite3.Database(dbPath, OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Failed to connect to the database" });
    } else {
      const { id, name } = req.body;
      const status = "ZAJĘTE";
      const query = `UPDATE accom SET  name = ?, status = ? WHERE id = ?`;

      db.run(query, [name, status, id], function (err) {
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