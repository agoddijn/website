// For login
app.controller('LoginController', ['$http', '$scope', function($http, $scope) {
  var vm = this;

  vm.sendPressed = false;
  vm.attempt = false;
  vm.success = false;
  vm.match = false;
  vm.errorReason;

  vm.login = function() {
    var data = {
      user: $scope.username,
      pass: $scope.password
    };
    console.log("Loging in ", data.user, " with pass ", data.pass);
  }

  vm.register = function() {
    vm.attempt = true;
    var data = {
      user: $scope.username,
      pass: $scope.password,
    };
    // Passwords match, registering user
    if(data.pass == $scope.confirm) {
      vm.match = true;
      console.log("Registering " + data.user + " with pass " + data.pass);
      // POST request to backend
      $http.post('/register', data).then(function(res){
        if (res.data.success) {
          vm.attempt = true;
          vm.success = true;
          console.log("Great success!");
          console.log(res.data.user);
        } else {
          vm.errorReason = res.data.reason;
          vm.attempt = true;
          vm.success = false;
          console.log("Big failure!");
        };
      })
    // Passwords don't match
    } else {
      console.log("Passwords don't match");
    }
  }

  var switchToSignup = function() {

  }

}]);