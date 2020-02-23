const express = require("express");
// const fs = require("fs");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
// const filebuffer = fs.readFileSync("db/usda-nnd.sqlite3");

// const db = new sqlite.Database(filebuffer);
// const db = require("./models");
const routes = require('./routes');

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(routes);

// access database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true, useUnifiedTopology: true });
// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}


app.listen(PORT, () => {
  console.log(`Find the server at: http://localhost:${PORT}/`); // eslint-disable-line no-console
});