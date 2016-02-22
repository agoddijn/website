angular.module('routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider

    .when('/projects', {
      templateUrl : '/views/pages/projects.html',
      controller : 'ProjectController',
      controllerAs : 'projects'
    })

    .when('/jobs', {
      templateUrl : '/views/pages/jobs.html',
      controller : 'JobController',
      controllerAs : 'jobs'
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

    .when('/register', {
      templateUrl : 'views/pages/register.html',
      controller : 'LoginController',
      controllerAs : 'register'
    })

    .when('/login', {
      templateUrl : 'views/pages/login.html',
      controller : 'LoginController',
      controllerAs : 'login'
    });

  $locationProvider.html5Mode(true);
});