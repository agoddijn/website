var User = require('../models/user.js');

module.exports = addUser;

function addUser(req, res) {
  var username = req.body.user;
  var password = req.body.pass;
  var email = req.body.email;
  console.log("User " + username + " registering with email " + email + " and pass " + password);

  var user = new User({
    username: username,
    email: email,
    password: password
  });

  user.save(function(err) {
    if (err) {
      console.log(err);
      res.send({ success: false, error: err });
    } else {
      console.log("User successfully added");
      res.send({ success: true, user: user });
    }
  })
};
