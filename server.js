const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
const PORT = 22222;
const cors = require("cors");

app.use(cors);
app
  .route("/")
  .all((req, res, next) => {
    console.log("hello world");
    next();
  })
  .get((req, res) => {
    res.send("Hello World!");
  });

io.sockets.on("connection", function (socket) {
  // Web Socket Connection
  console.log("connect");
  socket.on("paint", (msg) => {
    console.log(msg);
  });
});

server.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
