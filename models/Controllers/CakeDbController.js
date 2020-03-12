const db = require("./../CakeModel");

// Defining methods for the bookController
module.exports = {
  create: function(req, res) {
    console.log("This is requestboy: ", req.body)
    db.create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => {
        res.status(422).json(err)
      });
  }
};