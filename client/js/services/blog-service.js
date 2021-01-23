app.factory('BlogData', ['$http', '$q', function($http, $q) {

  var svc = {
    blogs: [],
    getBlogs: getBlogs
  }

  function getBlogs() {
    if (svc.blogs.length > 0) return;
      $http.get('/api/blogs').then(response => {
          response.data.forEach(blog => {
            svc.blogs.push(blog);
          })
      })
  }

  return svc;

}]);