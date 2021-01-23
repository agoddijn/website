angular.module('routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider

    .when('/projects', {
      templateUrl : '/views/pages/tiles.html',
      controller : 'TileController',
      controllerAs : 'tiles'
    })

    .when('/jobs', {
      templateUrl : '/views/pages/tiles.html',
      controller : 'TileController',
      controllerAs : 'tiles'
    })

    .when('/blogs', {
      templateUrl : '/views/pages/blogs.html',
      controller : 'BlogController',
      controllerAs : 'blogs'
    })

    .when('/', {
      templateUrl : '/views/pages/about.html',
      controller : 'AboutController',
      controllerAs : 'about'
    })

    .when('/resume', {
      templateUrl : 'views/pages/resume.html',
      controller : 'ResumeController',
      controllerAs : 'resume'
    });

  $locationProvider.html5Mode(true);
});