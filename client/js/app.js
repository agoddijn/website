angular.module('app', ['routes', 'ui.bootstrap'])

//Main controller
.controller('MainController', [function() {
  var vm = this;
  vm.navItems = [
    {name: "jobs", url: "/jobs"},
    {name: "projects", url: "/projects"},
    {name: "blogs", url: "/blogs"}
  ]
}])

//Home page controller
.controller('JobController', [function() {
  var vm = this;
  vm.message = "I am the job controller";
}])

//Projects controller
.controller('ProjectController', [function() {
  var vm = this;
  vm.message = "I am the projects controller";
}])

//About controller
.controller('BlogController', [function() {
  var vm = this;
  vm.message = "I am the blog controller";
}]);