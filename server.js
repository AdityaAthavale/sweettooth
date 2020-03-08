const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
const rounter = express.Router()
const app = express();
const PORT = process.env.PORT || 3001;
const UserDbController = require("./models/Controllers/UserDbController");
const CakeDbController = require("./models/Controllers/CakeDbController");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("sweettooth/build"));
}
// Add routes, both API and view
// app.use(routes);

app.get("/allCakeImages", function(req, res) {
    res.json("ImageURLS: [www.google.com]")
})

app.post("/createCake", function (req, res) {
    CakeDbController.create(req, res)
})

app.post("/createNewUser", function (req, res) {
    UserDbController.create(req, res) 
})

app.post("/Login", function (req, res) {
    UserDbController.login(req, res)
})

app.get("/images/:id", function(req, res) {
  const id = req.params.id
  res.sendFile(path.join(__dirname, ("./models/Assets/" + id + ".png")))
})

rounter.use(function (req, res) {
    res.sendFile(path.join(__dirname, "./sweettooth/build/index.html"))  
})



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sweettooth");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

