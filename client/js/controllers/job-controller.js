//For Jobs
app.controller('JobController', ['$scope', 'JobData', '$uibModal', function($scope, JobData, $uibModal) {
  var vm = this;
  vm.jobList = JobData.jobs;
  JobData.getJobs();

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

app.controller('JobModalController', ['$uibModalInstance', 'selected', function($uibModalInstance, selected) {

  var vm = this;
  vm.job = selected;
  vm.interval = 10000; //ms
  vm.noWrapSlide = false;
  vm.close = function() {
      $uibModalInstance.dismiss('cancel');
  };

}]);