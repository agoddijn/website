//For Projects
//Controller
app.controller('ProjectController', ['ProjectData', '$uibModal', '$scope',  function(ProjectData, $uibModal, $scope) {
  var vm = this;
  vm.projectList = ProjectData.projects;

  vm.open = function(project) {

    $scope.selectedProject = project;

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: "../views/pages/projects-modal.html",
      controller: "ProjectModalController",
      controllerAs: "modalCtrl",
      size: 'lg',
      resolve: {
        selected: function() {
          return $scope.selectedProject;
        }
      }
    });
  };

}]);

app.controller('ProjectModalController', ['$modalInstance', 'selected', function($modalInstance, selected) {

  var vm = this;
  vm.project = selected;
  vm.interval = 5000; //ms
  vm.noWrapSlide = false;
  vm.close = function() {
    $modalInstance.dismiss('cancel');
  };

}]);