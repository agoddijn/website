app.service('BlogData', function() {
  var blogs = [
    {
      id: "1",
      title: "First blog post",
      date: new Date(),
      content: "This is my first blog post.",
      additional: []
    },
    {
      id: "2",
      title: "Second blog post",
      date: new Date(),
      content: "To test blog posts",
      additional: []
    }
  ]
  return blogs;
});