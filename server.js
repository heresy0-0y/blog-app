const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const postsRoutes = require("./routes/posts.js");
const db = require("./db/connection");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());

app.use("/api", postsRoutes);

db.on(
  "error",
  console.error.bind(console, "MongoBleepBloop error of connection: ")
);

app.listen(PORT, () => console.log(`Listenin' in on port: ${PORT}`));
