//For Contact
//Controller
app.controller('ContactController', ['$uibModal', function($uibModal) {
  var vm = this;

  vm.open = function() {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: "../views/pages/contact-modal.html",
      controller: "ContactModalController",
      controllerAs: "contact",
    });
  };

}]);

app.controller('ContactModalController', ['$modalInstance', '$scope', '$http', function($modalInstance, $scope, $http) {

  var vm = this;
  vm.close = function() {
    $modalInstance.dismiss('cancel');
  };
  vm.send = function() {
    var data = {
      name: $scope.name,
      email: $scope.email,
      message: $scope.message
    };
    $http.post('/sendMail', data).then(function(res){
      if (res.success) {
        console.log("Great success!");
      };
    }, function(res) {
      console.log("Oops, something went wrong!");
    });
  }

}]);