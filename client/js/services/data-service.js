/**
 * Created by alexgoddijn on 30/07/2017.
 */

app.factory('Data', ['$http', '$q', function($http, $q) {

    var svc = {
        jobs: [],
        projects: [],
        getJobs: getJobs,
        getProjects: getProjects,
        getDataAsync: getDataAsync
    };

    function getProjects() {
        if (svc.projects.length > 0) return;
        $http.get("/api/projects").then(projects => {
            projects.data.forEach(project => {
                svc.projects.push(project)
            })
        });
    }

    function getJobs() {
        if (svc.jobs.length > 0) return;
        $http.get("/api/jobs").then(response => {
            response.data.forEach(job => {
                svc.jobs.push(job)
            })
        });
    }

    function getDataAsync(baseUrl, name) {
        return $http.get(baseUrl + name);
    }

    return svc;

}]);