//For Contact
//Controller
app.controller('ContactController', ['$uibModal', function($uibModal) {
  var vm = this;

  vm.open = function() {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: "../views/pages/contact-modal.html",
      controller: "ContactModalController",
      controllerAs: "contact"
    });
  };

}]);

app.controller('ContactModalController', ['$modalInstance', '$scope', '$http', function($modalInstance, $scope, $http) {

  var vm = this;
  vm.sendPressed = false;
  vm.attempt = false;
  vm.success = false;
  vm.errorReason;
  vm.close = function() {
    $modalInstance.dismiss('cancel');
  };
  vm.send = function() {
    vm.sendPressed = true;
    var data = {
      name: $scope.name,
      email: $scope.email,
      message: $scope.message
    };
    $http.post('/sendMail', data).then(function(res){
      if (res.data.success) {
        vm.attempt = true;
        vm.success = true;
      } else {
        vm.errorReason = res.data.reason;
        vm.attempt = true;
        vm.success = false;
      };
    }, function(res) {
      console.log("Oops, something went wrong!");
      console.log(res.data.error);
      vm.errorReason = 'Unknown Error';
      vm.attempt = true;
      vm.success = false;
    });
  }

}]);