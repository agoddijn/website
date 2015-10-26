var app = angular.module('app', ['routes', 'ui.bootstrap'])

//Main controller
.controller('MainController', ['$location', function($location) {
  var vm = this;
  vm.isActive = function(navItem) {
    if ($location.path() == navItem.url) {
      return "active";
    } else {
      return "";
    }
  }
  vm.navItems = [
    {name: "jobs", url: "/jobs"},
    {name: "projects", url: "/projects"},
    {name: "blogs", url: "/blogs"}
  ];
  vm.linkIcons = [
    {icon: "fa fa-facebook fa-lg", link: "https://www.facebook.com/alex.goddijn"},
    {icon: "fa fa-instagram fa-lg", link: "https://instagram.com/itakepicturesalex/"},
    {icon: "fa fa-linkedin fa-lg", link: "https://ca.linkedin.com/pub/alex-goddijn/b3/11a/633"},
    {icon: "fa fa-github fa-lg", link: "https://github.com/agoddijn"},
    {icon: "fa fa-youtube fa-lg", link: "https://www.youtube.com/channel/UCU6lCeBsZp-aWJ6_ymRncBw"}
  ];
}]);
