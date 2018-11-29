console.log("hello");

// Importing modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

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

app.listen(process.env.PORT || 8081);
