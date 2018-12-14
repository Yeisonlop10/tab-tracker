console.log("hello");

// Importing modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

// To use sequelize
const { sequelize } = require("./models");
const config = require("./config/config");

// Building the express app
const app = express(); // This builds the express server

// Enable the packages
app.use(morgan("combined"));
app.use(bodyParser.json()); //This allows the express app
// to easily parse any json request
app.use(cors()); // This will allow any client to use this

// Comand to make a request
app.get("/status", (req, res) => {
  res.send({
    message: "This app is working!!"
  });
});

// To make a post
require("./routes")(app);

// By temporarily typing sequelize.sync({force:true})
// The database will be cleared

sequelize.sync().then(() => {
  app.listen(config.port);
  console.log(`Server started on port ${config.port}`);
});
