app.factory('ProjectData', ['$http', '$q', function($http, $q) {

  var svc = {
    names: ["halp", "website", "youtube"],
    projects: [],
    getProjects: getProjects
  }

  var length = svc.names.length;

  function getProjects() {
    if (length == svc.projects.length) return;
    for (var i = 0; i < length; i++){
      var url = "/project/" + svc.names[i];
      $http.get(url).then(function(res){
        if (res.data) {
          svc.projects.push(res.data);
        } else {
          console.log("Couldn't get project");
        }
      })
    }
  }

  return svc;

}]);