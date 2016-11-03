app.factory('JobData', ['$http', '$q', function($http, $q) {

  var svc = {
    names: ["tomtom", "axiomzen"],
    jobs: [],
    getJobs: getJobs
  };

  var length = svc.names.length;

  function getJobs() {
    if (length == svc.jobs.length) return;
    for (var i = 0; i < length; i++){
      var url = "/job/" + svc.names[i];
      $http.get(url).then(function(res){
        if (res.data) {
          svc.jobs.push(res.data);
        } else {
          console.log("Couldn't get job");
        }
      })
    }
  }

  return svc;

}])