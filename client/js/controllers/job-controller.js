//For Jobs
app.controller('JobController', ['$scope', 'JobData', '$uibModal', function($scope, JobData, $uibModal) {
  var vm = this;
  vm.jobList = JobData.jobs;

  vm.open = function(job) {

    $scope.selectedJob = job;

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: "../views/pages/job-modal.html",
      controller: "JobModalController",
      controllerAs: "modalCtrl",
      size: 'lg',
      resolve: {
        selected: function() {
          return $scope.selectedJob;
        }
      }
    });
  };

}]);

app.controller('JobModalController', ['$modalInstance', 'selected', function($modalInstance, selected) {

  var vm = this;
  vm.job = selected;

}]);