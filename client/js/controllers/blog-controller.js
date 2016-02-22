//For Blogs
//Blog controller
app.controller('BlogController', ['BlogData', function(BlogData) {
  var vm = this;
  vm.blogs = BlogData;
}]);