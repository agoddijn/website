//For Blogs
//Blog controller
app.controller('BlogController', ['BlogData', function(BlogData) {

  var vm = this;
  vm.blogs = BlogData.blogs;
  BlogData.getBlogs();
  vm.selected = -1;

  vm.select = function(index) {
    if(index == vm.selected) vm.selected = -1;
    else vm.selected = index;
  }

}]);