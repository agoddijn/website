var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


// Schema
var userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

// Methods
userSchema.pre('save', function(next) {
  var user = this;
  // Only hash if it is new or modified
  if (!user.isModified('password')) return next();
  // Generate salt
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    // Hash the password
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    })
  })
});

userSchema.methods.comparePassword = function(candidate, cb) {
  bcrypt.compare(candidate, this.password, function(err, match) {
    if (err) return cb(err);
    cb(null, match);
  });
};

module.exports = mongoose.model('User', userSchema);