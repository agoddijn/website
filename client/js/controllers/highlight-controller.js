/**
 * Created by alexgoddijn on 05/08/2017.
 */

app.controller('HighlightController', ['$http', '$uibModal', '$scope', function($http, $uibModal, $scope) {

    var vm = this;

    var highlightJobs = ['autonomos'];
    var highlightProjects = ['halp'];


    vm.highlights = [];

    for (var i = 0; i < highlightJobs.length; i++) {
        $http.get('/job/' + highlightJobs[i]).then(function(res){
            if (res.data) {
                vm.highlights.push(res.data);
            } else {
                console.log("Couldn't get data");
            }
        })
    }

    for (var i = 0; i < highlightProjects.length; i++) {
        $http.get('/project/' + highlightProjects[i]).then(function(res){
            if (res.data) {
                vm.highlights.push(res.data);
            } else {
                console.log("Couldn't get data");
            }
        })
    }

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