const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
require("dotenv").config();

// Set cors
app.use(
  cors({
    origin: "*",
  })
);

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// main
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// get port from env
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening at ${port} port`);
});
