/**
 * Created by alexgoddijn on 30/07/2017.
 */

app.factory('Data', ['$http', '$q', function($http, $q) {

    var svc = {
        jobNames: ["tomtom", "axiomzen", "autonomos"],
        projectNames: ["halp", "website", "youtube", "ubcInsight", "morseToSpeech", "uniserve"],
        jobs: [],
        projects: [],
        getJobs: getJobs,
        getProjects: getProjects,
        getDataAsync: getDataAsync
    };

    function getProjects() {
        if (svc.projectNames.length == svc.projects.length) return;
        svc.projects = getData("/project/", svc.projectNames);
    }

    function getJobs() {
        if (svc.jobNames.length == svc.jobs.length) return;
        svc.jobs = getData("/job/", svc.jobNames);
    }

    function getData(baseUrl, names) {
        var data = [];
        for (var i = 0; i < names.length; i++){
            $http.get(baseUrl + names[i]).then(function(res){
                if (res.data) {
                    data.push(res.data);
                } else {
                    console.log("Couldn't get data");
                }
            })
        }
        return data;
    }

    function getDataAsync(baseUrl, name) {
        return $http.get(baseUrl + name);
    }

    return svc;

}]);