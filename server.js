const express = require("express");
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const logger = require("morgan")("tiny");

// Luis: Removing Original Franklin Mongoose Code
// const mongoose = require("mongoose");

// Luis: Requiring ./models
const db = require("./models");

const { auth } = require("./controllers");

const PORT = process.env.PORT || 3001;
const app = express();

// Luis: Removing Original Franklin Mongoose Code
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/my-first-mern");

//#region MIDDLEWARE

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//passport
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Luis: morgan and tiny node packages
// Not sure what 'logger' is for so leaving it in for now
app.use(logger);

//controllers
app.use("/auth", auth);

//#endregion MIDDLEWARE

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Original Franklin Express Server Launch Code
// app.listen(PORT, function() {
//   console.log(`🌎 ==> Server now on port ${PORT}!`);
// });

// Updated Express Server Launch Code (with sequelize)
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`🌎 ==> Server listening on port: ${PORT}!`);
  });
});