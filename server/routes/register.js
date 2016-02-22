var User = require('../models/user.js');

module.exports = addUser;

function addUser(req, res) {
  var username = req.body.user;
  var password = req.body.pass;
  console.log("User " + username + " registering with pass " + password);

  var user = new User({
    username: username,
    password: password
  });

  user.save(function(err) {
    if (err) {
      console.log(err);
      res.status(400).send({ success: false, error: err });
    } else {
      console.log("User successfully added");
      res.status(201).send({ success: true, user: user });
    }
  })
};
