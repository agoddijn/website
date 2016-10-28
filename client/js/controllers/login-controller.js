// For login
app.controller('LoginController', ['$http', '$scope', 'LoginService', function($http, $scope, LoginService) {
  var vm = this;

  vm.sendPressed = false;
  vm.attempt = false;
  vm.success = false;
  vm.match = false;
  vm.errorReason;

  vm.login = function() {

    vm.sendPressed = true

    var data = {
      user: $scope.username,
      pass: $scope.password
    };

    // DEBUG
    console.log("Loging in ", data.user, " with pass ", data.pass);
    // END DEBUG

    LoginService.login(data).then(function(data) {
      if (data.success) {
        vm.attempt = true;
        vm.success = true;
      } else {
        vm.attempt = true;
        vm.errorReason = data.error;
      };
    })
  }

  vm.register = function() {
    vm.attempt = true;

    var data = {
      user: $scope.username,
      email: $scope.email,
      pass: $scope.password
    };

    // Passwords match, registering user
    if(data.pass == $scope.confirm) {

      vm.match = true;

      // DEBUG
      console.log("Registering " + data.user + " with email " + data.email + " and pass " + data.pass);
      // END DEBUG

      LoginService.register(data).then(function(data) {
        if (data.success) {
          vm.attempt = true;
          vm.success = true;
        } else {
          vm.attempt = true;
          vm.errorReason = data.error;
        };
      })

    // Passwords don't match
    } else {
      console.log("Passwords don't match");
      vm.errorReason = "Passwords don't match";
    }
  }

  var switchToSignup = function() {

  }

}]);