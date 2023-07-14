const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3000;

app.use(bodyParser.json());

const db = new sqlite3.Database("./db.sqlite3");

const baseURL = "https://adminlm.onrender.com";

app.get(`${baseURL}/api/product`, (req, res) => {
  db.all("SELECT * FROM Products", (err, rows) => {
    if (err) {
      return res.status(500).send("Failed to fetch products from database");
    }
    res.send(rows);
  });
});

app.post(`${baseURL}/api/product`, (req, res) => {
  const { category, quantity } = req.body;

  if (!category || !quantity) {
    return res.status(400).send("Missing required fields");
  }

  db.run(
    "INSERT INTO Products (category, quantity) VALUES (?, ?)",
    [category, quantity],
    function (err) {
      if (err) {
        return res.status(500).send("Failed to add product to the database");
      }

      res
        .status(201)
        .send(
          `Product ${category} with quantity ${quantity} added successfully (ID: ${this.lastID})`
        );
    }
  );
});

app.put(`${baseURL}/api/products/:id`, (req, res) => {
  const { id } = req.params;
  const { category, quantity } = req.body;

  if (!category || !quantity) {
    return res.status(400).send("Missing required fields");
  }

  db.run(
    "UPDATE Products SET category = ?, quantity = ? WHERE id = ?",
    [category, quantity, id],
    function (err) {
      if (err) {
        return res
          .status(500)
          .send(`Failed to update product ${id} in the database`);
      }
      if (this.changes === 0) {
        return res.status(404).send(`Product ${id} not found`);
      }
      res.send(`Product ${id} updated successfully`);
    }
  );
});

app.delete(`${baseURL}/api/products/:id`, (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM Products WHERE id = ?", [id], function (err) {
    if (err) {
      return res
        .status(500)
        .send(`Failed to delete product ${id} from the database`);
    }
    if (this.changes === 0) {
      return res.status(404).send(`Product ${id} not found`);
    }
    res.send(`Product ${id} deleted successfully`);
  });
});

app.listen(port, () => {
  console.log("API server started on port 3000");
});
