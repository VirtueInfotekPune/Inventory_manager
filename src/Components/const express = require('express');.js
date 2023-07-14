const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Connect to the SQLite database
const db = new sqlite3.Database("./{{db.sqlite3}}");

// This endpoint handles POST requests to update quantity for a particular category name
app.post("/products/update-quantity", (req, res) => {
  const { category, quantity } = req.body;

  // Check if required fields are present
  if (!category || !quantity) {
    return res.status(400).send("Missing required fields");
  }

  // Update the quantity for the specified category name in the database
  db.run(
    `UPDATE products SET quantity = ${quantity} WHERE category = ${category}`,
    [quantity, category],
    function (err) {
      if (err) {
        return res
          .status(500)
          .send("Failed to update quantity for the specified category name");
      }

      // Return a success message with the number of rows updated
      res
        .status(200)
        .send(
          `Quantity updated successfully for ${this.changes} products in the ${category} category`
        );
    }
  );
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
