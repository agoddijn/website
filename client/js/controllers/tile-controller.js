/**
 * Created by alexgoddijn on 30/07/2017.
 */

app.controller('TileController', ['Data', '$uibModal', '$scope', '$location', function(Data, $uibModal, $scope, $location) {
    var vm = this;
    vm.dataList = [];

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

    getData = function(){
        if ($location.path() === '/projects') {
            Data.getProjects();
            vm.open = openProject;
            vm.type = "project";
            vm.dataList = Data.projects;
        }
        if ($location.path() === '/jobs') {
            Data.getJobs();
            vm.open = openJob;
            vm.type = "job";
            vm.dataList = Data.jobs;
        }
    };

    getData();

}]);

app.controller('ModalController', ['$uibModalInstance', 'selected', function($uibModalInstance, selected) {

    var vm = this;
    vm.resize_width = 1024;
    vm.data = selected;
    vm.interval = 10000; //ms
    vm.noWrapSlide = false;
    vm.close = function() {
        $uibModalInstance.dismiss('cancel');
    };

}]);