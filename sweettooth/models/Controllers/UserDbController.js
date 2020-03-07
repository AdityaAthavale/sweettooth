const db = require("./../UserData");

// Defining methods for the bookController
module.exports = {
  login: function(req, res) {
    db.find({email: req.body.email})
      .then(dbUser => {
          console.log(dbUser)
          console.log(req.body.password)
          if(dbUser[0].password === req.body.password) {
            res.json(dbUser)
          }
          res.status(401).json("UnAuthorized")
      })
      .catch(err => res.status(400).json(err));
  },
  
  create: function(req, res) {
    let userName = req.body.userName;
    let password = req.body.password;
    let address = req.body.address;
    let email = req.body.email;
    let phone = req.body.phone;
    let birthday = req.body.birthday;

    console.log(req.body)
    
    db.update({
        email: email
    }, {
        $set: {
            userName,
            password,
            address,
            email,
            phone,
            birthday
        }
    }, {
        upsert: true
    })
      .then(dbUser => res.json(dbUser))
      .catch(err => {
          res.status(422).json(err)
      });
  }
};