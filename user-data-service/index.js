const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const mariadb = require("mariadb");

const app = express();

app.use(bodyParser.json());

const pool = mariadb.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

app.get("/", async (req, res) => {
  const result = await pool.query(
    "SELECT nickname FROM registrierung WHERE email = (SELECT email FROM tokens WHERE token = ?)",
    [req.body.token]
  );

  console.log(result);

  if (result.length === 1) {
    res.send({
      nickname: result[0].nickname
    });
  } else {
    res.status(401).send({
      isError: true,
      message: "Invalid credentials."
    });
  }
});

const server = http.createServer(app);

const port = process.env.PORT || 8001;

server.listen(port, () => {
  console.log(`Server is listening on *:${port}.`);
});
