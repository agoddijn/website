//Main controller
app.controller('MainController', ['$location', 'AboutData', function($location, AboutData) {
  var vm = this;

  vm.shortAbout = AboutData.s;
  vm.isCollapsed = true;

  vm.isActive = function(navItem) {
    if ($location.path() == navItem.url) {
      return "active-link";
    } else {
      return "";
    }
  };

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
    {icon: "fa fa-youtube fa-lg", link: "https://www.youtube.com/channel/UCU6lCeBsZp-aWJ6_ymRncBw"},
    {icon: "fa fa-vimeo fa-lg", link: "https://vimeo.com/agoddijn"}
  ];

}]);