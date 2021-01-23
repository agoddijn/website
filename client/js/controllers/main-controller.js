//Main controller
app.controller('MainController', ['$location', 'AboutData', '$scope', function($location, AboutData, LoginService, $scope, Data, $uibModal) {
    var vm = this;

    vm.resize_width = 1024;

    vm.shortAbout = AboutData.s;
    vm.isCollapsed = true;

    vm.isActive = function(navItem) {
        if ($location.path() == navItem.url) {
            return "active-link";
        } else if ($location.path() == '/register' && navItem.url == '/login') {
            return "active-link";
        } else {
            return "";
        }
    };

    vm.navItems = [
        {name: "jobs", url: "/jobs"},
        {name: "projects", url: "/projects"},
        {name: "blogs", url: "/blogs"},
        {name: "Resume", url: "/resume"}
    ];

    vm.linkIcons = [
        {icon: "fa fa-facebook fa-lg", link: "https://www.facebook.com/aquafreshh"},
        {icon: "fa fa-instagram fa-lg", link: "https://www.instagram.com/alex_goddijn/"},
        {icon: "fa fa-linkedin fa-lg", link: "https://ca.linkedin.com/pub/alex-goddijn/b3/11a/633"},
        {icon: "fa fa-github fa-lg", link: "https://github.com/agoddijn"},
        {icon: "fa fa-youtube fa-lg", link: "https://www.youtube.com/channel/UCU6lCeBsZp-aWJ6_ymRncBw"},
        {icon: "fa fa-vimeo fa-lg", link: "https://vimeo.com/agoddijn"}
    ];

    vm.checkCollapsed = function() {
        if(!vm.isCollapsed) vm.isCollapsed = !vm.isCollapsed;
    };

}]);
