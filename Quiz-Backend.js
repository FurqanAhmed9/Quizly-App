// This Code is for backend of the My Quiz App project using node.js and express.js for creating connection to the mysql database. 
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "quiz",
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


// Get data from frontend and perform query on mysl file
app.post("/api/data", (req, res) => {
  const { name, email, score } = req.body;

  const query =
    "INSERT INTO quiz_info(user_name,email,quiz_score) VALUES (?, ?, ?)";
  connection.query(query, [name, email, score], (err, result) => {
    if (err) {
      console.error("Error inserting data into MySQL:", err);
      res.status(500).json({ error: "Failed to insert data into MySQL" });
      return;
    }

    console.log("Data inserted into MySQL");
    res.json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
