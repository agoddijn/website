app.factory('BlogData', ['$http', '$q', function($http, $q) {

  var svc = {
    names: ["first"],
    blogs: [],
    getBlogs: getBlogs
  }

  var length = svc.names.length;

  function getBlogs() {
    if (length == svc.blogs.length) return;
    for (var i = 0; i < length; i++){
      var url = "/blog/" + svc.names[i];
      $http.get(url).then(function(res){
        if (res.data) {
          svc.blogs.push(res.data);
        } else {
          console.log("Couldn't get blog");
        }
      })
    }
  }

  return svc;

}]);