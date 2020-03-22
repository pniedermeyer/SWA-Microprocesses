const express = require("express");
const http = require("http");
const LoginManager = require("./login-manager");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/login", async (req, res) => {
  const token = await LoginManager.loginUser(req.body);
  if (token) {
    res.send({
      token
    });
  } else {
    res.status(404).send({
      isError: true,
      message: "User does not exist or password is incorrect."
    });
  }
});

app.delete("/login", async (req, res) => {
  const result = await LoginManager.logoutUser(req.body.token);

  if (result) {
    res.send();
  } else {
    res.status(401).send({
      isError: true,
      message: "Invalid credentials."
    });
    DE;
  }
});

const server = http.createServer(app);

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Server is listening on *:${port}.`);
});
