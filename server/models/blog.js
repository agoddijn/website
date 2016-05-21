var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
  date: {type: Date, default: Date.now},
  title: String,
  content: String // This will be html, to be displayed on the website
});

module.exports = mongoose.model('Blog', blogSchema);