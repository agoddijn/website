var User = require('../models/user.js');

module.exports = loginUser;

function loginUser(req, res) {
  var username = req.body.user;
  var password = req.body.pass;
  console.log("User " + username + " logging in with pass " + password);

  User.findOne({ $or: [{ username: username}, { email: username}] }, function(err, user) {
    if (err) {
      res.send({ success: false, error: err});
    } else if(user == null) {
      res.send({ success: false, error: "User not found"});
    } else {
      user.comparePassword(password, function(err, match) {
        if (err) {
          res.send({ success: false, error: err});
        } else if (match) {
          res.send({ success: true, user: user});
        } else {
          res.send({ success: false, error: 'Passwords do not match'});
        }
      })
    };
  })
}