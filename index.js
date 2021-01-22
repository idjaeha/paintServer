const express = require("express");
const app = express();
const PORT = 3567;
let socket;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/client.js", (req, res) => {
  res.sendFile(__dirname + "/client.js");
});

app.listen(PORT, () => {
  console.log(`${PORT}`);
});
