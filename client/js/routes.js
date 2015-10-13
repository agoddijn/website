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
    });

  $locationProvider.html5Mode(true);
});