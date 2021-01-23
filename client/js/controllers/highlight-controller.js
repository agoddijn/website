/**
 * Created by alexgoddijn on 05/08/2017.
 */

app.controller('HighlightController', ['$http', '$uibModal', '$scope', function($http, $uibModal, $scope) {

    var vm = this;

    var highlightJobs = ['Autonomos'];
    var highlightProjects = ['H.A.L.P'];


    vm.highlights = [];

    $http.get('/api/jobs').then(response => {
        response.data.forEach(job => {
            if (highlightJobs.includes(job.name)) {
                vm.highlights.push(job)
            }
        })
    })

    $http.get('/api/projects').then(response => {
        response.data.forEach(project => {
            if (highlightProjects.includes(project.name)) {
                vm.highlights.push(project)
            }
        })
    })

    vm.open = function(instance) {
        console.log("Opening");
        if (instance.sections != null) {
            openProject(instance);
        }
        else if (instance.positions != null) {
            openJob(instance);
        }
    };

    openProject = function(project) {
        openData("projects-modal.html", project);
    };

    openJob = function(job) {
        openData("job-modal.html", job);
    };

    openData = function(templateUrl, data) {
        $scope.selected = data;

        $uibModal.open({
            animation: true,
            templateUrl: "../views/pages/" + templateUrl,
            controller: "ModalController",
            controllerAs: "modalCtrl",
            size: 'lg',
            resolve: {
                selected: function() {
                    return $scope.selected;
                }
            }
        });
    };

}]);