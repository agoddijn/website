app.factory('LoginService', ['$q', '$timeout', '$http', function($q, $timeout, $http) {

  // var user = null;

  // return ({
  //   isLoggedIn: isLoggedIn,
  //   login: login,
  //   logout: logout,
  //   register: register,
  //   getUser: getUser
  // });

  // function getUser() {
  //   return user;
  // };

  // function login(username, password) {
  //   var data = {
  //     username: username,
  //     password: password
  //   };

  //   // Send post request to server
  //   $http.post('/user/login', data)
  //     .success(function(data, status))

  // };

  // function register(data) {
  //   // Register user
  //   $http.post('/register', data).then(function(res){
  //     if (res.data.success) {
  //       vm.attempt = true;
  //       vm.success = true;
  //       console.log("Great success!");
  //       user
  //     } else {
  //       vm.errorReason = res.data.reason;
  //       vm.attempt = true;
  //       vm.success = false;
  //       console.log("Big failure!");
  //     };
  //   })
  // };

}])